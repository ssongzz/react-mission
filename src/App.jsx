import { useState } from 'react'
import { useEffect } from 'react'
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  const userList = [
    { id: 1, name: 'scl', job: 'Publisher' },
    { id: 2, name: 'kim', job: 'Designer' },
    { id: 3, name: 'lee', job: 'Developer' }
  ];
  
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const totalUserList = [
        ...userList,
        ...data.map(item => ({
          ...item,
          id: item.id + userList.length
        }))
      ];
      setUser(totalUserList);
      setLoading(false);
    });
  }, []);

  const [search, setSearch] = useState('');
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUser = user.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  const onDelete = (num) => {
    const newUserList = user.filter((item) => {
      return item.id !== num;
    });
    setUser(newUserList);
    console.log(newUserList)
  };

  return (
    <>
      {
        loading === true ? (
          <div className="loading-spinner">데이터를 불러오는 중입니다...</div> 
        ) : (
          <div className="tblWrap">
            <div className="boxWrap">
              <h2>등록</h2>
              <div className="formGroup">
                <div className="inputItem">
                  <label>이름</label>
                  <input type="text" placeholder="이름을 입력하세요" />
                </div>
                <div className="inputItem">
                  <label>직업</label>
                  <input type="text" placeholder="직업을 입력하세요" />
                </div>
                <button type="button" className="btn-register">등록</button>
              </div>
            </div>
            
            <div className="boxWrap">
              <h2>검색</h2>
              <div className="inputItem">
                <label>이름</label>
                <input type="text" placeholder="이름으로 검색" onChange={onSearch} />
              </div>
            </div>
            
            <table>
              <thead>
                  <tr>
                      <th>번호</th>
                      <th>이름</th>
                      <th>직업 or 메일주소</th>
                      <th>삭제</th>
                  </tr>
              </thead>
              <tbody>
              {
                filteredUser.length === 0 ? (
                  <tr>
                    <td colSpan="4">검색 결과가 없습니다.</td>
                  </tr>
                ) : (
                  filteredUser.map((item, idx) => (
                    <UserProfile 
                      key={item.id}
                      onDelete={onDelete}
                      item={{
                        num: item.id,
                        name: item.name,
                        job: item.job || '미지정',
                        email: item.email || '미지정' 
                      }}
                    />
                  ))
                )
              }
              </tbody>
            </table>
          </div>
        )
      }
    </>
  )
}

export default App
