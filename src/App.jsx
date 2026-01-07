import { useState } from 'react'
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const userList = [
    { id: 1, name: 'scl', job: 'Publisher' },
    { id: 2, name: 'kim', job: 'Designer' },
    { id: 3, name: 'lee', job: 'Developer' }
  ];

  const [user, setUser] = useState(userList);

  return (
    <>
      {
        userList.map((user) => (
          <div className="card" key={user.id}>
            <h2>{user.name}</h2>
            <p>{user.job}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
