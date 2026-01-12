import { useState } from 'react'
import { useEffect } from 'react'
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const userList = [
    { id: 1, name: 'scl', job: 'Publisher' },
    { id: 2, name: 'kim', job: 'Designer' },
    { id: 3, name: 'lee', job: 'Developer' }
  ];

  const [user, setUser] = useState([]);

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

  return (
    <>
      {
        loading === true ? (
          <div className="loading-spinner">데이터를 불러오는 중입니다...</div> 
        ) : (
          <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Info(job or email)</th>
                </tr>
            </thead>
            <tbody>
            {
              user.map((item, idx) => (
                <UserProfile 
                  key={idx}
                  item={{
                    name: item.name,
                    job: item.job || '미지정',
                    email: item.email || '미지정' 
                  }}
                />
              ))
            }
            </tbody>
          </table>
        )
      }
    </>
  )
}

export default App
