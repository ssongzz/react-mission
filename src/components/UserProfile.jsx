import { useState } from 'react'

function UserProfile({ item, onDelete }) {
  return (
    <tr>
      <td>{item.num}</td>
      <td>{item.name}</td>
      {
          item.job === '미지정'? (
              <td className='txtMail'>{item.email}</td>
          ) : (
              <td>{item.job}</td>
          )
      }
      <td><button type="button" className="btn-delete" onClick={() => onDelete(item.num)}>삭제</button></td>
    </tr>
  )
}

export default UserProfile
