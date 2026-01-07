import { useState } from 'react'
import UserProfile from './components/UserProfile';
import './App.css'

function App() {
  const [user, setUser] = useState({
    name: 'scl',
    job: 'Publisher'
  })

  const updateName = () => {
    setUser({
      ...user, // 전개연산자로 덮어쓰기 되므로 앞으로 가져와야 함
      name: 'songcl'
    })
  }

  return (
    <>
      <UserProfile item={user} />
      <button type="button" onClick={updateName}>CHANGE</button>
    </>
  )
}

export default App
