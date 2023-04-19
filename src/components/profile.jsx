import React from 'react'
import { userAuth } from './contexts/authContext'

function Profile() {

  const { user } = userAuth()
  console.log(user)
  return (
    <div>
      <h1>{user.email}</h1>
    </div>
  )
}

export default Profile