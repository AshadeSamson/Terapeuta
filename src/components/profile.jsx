import React from 'react'
import { userAuth } from './contexts/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {

  const { userProfile } = userAuth()
  console.log(userProfile)

  return (
    <section className='dashboard'>
      <div className='user'>
        <div className='user-icon-box'><FontAwesomeIcon icon={faUser} size='7x' className='user-icon'/></div>
        <div className='user-greet'>
          <h1>Good Morning, Anonymous.</h1>
          <h3>Today is going to be a better day...</h3>
        </div>
      </div>
    </section>
  )
}

export default Profile