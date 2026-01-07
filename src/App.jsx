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
        user.map((item) => (
          <UserProfile key={item.id} item={item} />
        ))
      }
    </>
  )
}

export default App
