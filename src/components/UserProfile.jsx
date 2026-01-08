import { useState } from 'react'

function UserProfile({ item }) {
    return (
        <div className="card">
            <h2>{item.name}</h2>
            {
                item.job === '미지정'? <p className='txtMail'>{item.email}</p> : <p>{item.job}</p>
            }
        </div>
    )
}

export default UserProfile
