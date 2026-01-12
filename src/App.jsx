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
        ...data
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

  return (
    <>
      {
        loading === true ? (
          <div className="loading-spinner">데이터를 불러오는 중입니다...</div> 
        ) : (
          <>
            <div className="tblfilter">
              <input type="text" placeholder="name" onChange={onSearch} />
              <div>{search}</div>
            </div>
            <table>
              <thead>
                  <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Info(job or email)</th>
                  </tr>
              </thead>
              <tbody>
              {
                filteredUser.length === 0 ? (
                  <tr>
                    <td colSpan="3">검색 결과가 없습니다.</td>
                  </tr>
                ) : (
                  filteredUser.map((item, idx) => (
                    <UserProfile 
                      key={idx}
                      item={{
                        num: idx + 1,
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
          </>
        )
      }
    </>
  )
}

export default App
