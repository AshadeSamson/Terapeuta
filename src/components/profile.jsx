import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { userAuth } from './contexts/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

function Profile() {

  const { userProfile } = userAuth()
  console.log(userProfile)

  // Getting User's Time
    const day = new Date()
    const time = day.getHours()
    let greet;

    if(time < 12){
      greet = 'Good Morning'
    }else if(time >= 12 && time <= 16){
      greet = 'Good Afternoon'
    }else{
      greet = 'Good Evening'
    }




  return (
    <section className='dashboard'>
      <div className='user'>
        <div className='user-icon-box'>
          <FontAwesomeIcon icon={faUser} size='6x' className='user-icon'/>
          <h5>{userProfile.email}</h5>
        </div>
        <div className='user-greet'>
          <h1>{greet}, Anonymous.</h1>
          <h3>Today is going to be a better day!</h3>
        </div>
      </div>

      <div className='user-tools'>
        <div className='profile-navbar'>
          <div className='profile-nav'>
          <NavLink
          to='.'
          className='navlink user-profile-link' end>
            Appointments
          </NavLink>

          <NavLink
          to='messages'
          className='navlink user-profile-link'>
            Notifications
          </NavLink>

          <NavLink
          to='billing'
          className='navlink user-profile-link'>
            Payments & Billing
          </NavLink>

          <NavLink
          to='resources'
          className='navlink user-profile-link'>
            Resources
          </NavLink>

          <NavLink
          to='settings'
          className='navlink user-profile-link'>
            Account Settings
          </NavLink>
          </div>
        </div>
        <section>
           <Outlet />
        </section>
      </div>
    </section>
  )
}

export default Profile