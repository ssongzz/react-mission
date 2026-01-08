import { useState } from 'react'
import { useEffect } from 'react'
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const userList = [
    { id: 1, name: 'scl', job: 'Publisher' },
    { id: 2, name: 'kim', job: 'Designer' },
    { id: 3, name: 'lee', job: 'Developer' }
  ];

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      const totalUserList = [
        ...userList,
        ...data
      ];
      setUser(totalUserList);
    });
  }, []);

  return (
    <>
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
    </>
  )
}

export default App
