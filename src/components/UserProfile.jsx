import { useState } from 'react'

function UserProfile({ item }) {
    return (
        <div className="card">
            <h2>{item.name}</h2>
            <p>{item.job}</p>
        </div>
    )
}

export default UserProfile
