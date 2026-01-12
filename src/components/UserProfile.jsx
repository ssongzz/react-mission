import { useState } from 'react'

function UserProfile({ item }) {
  return (
    <tr>
      <td>{item.name}</td>
      {
          item.job === '미지정'? (
              <td className='txtMail'>{item.email}</td>
          ) : (
              <td>{item.job}</td>
          )
      }
    </tr>
  )
}

export default UserProfile
