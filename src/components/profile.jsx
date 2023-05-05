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

        <nav>
          <NavLink
          to='.'
          className='navlink' end>
            Appointments
          </NavLink>

          <NavLink
          to='messages'
          className='navlink'>
            Notifications
          </NavLink>

          <NavLink
          to='billing'
          className='navlink'>
            Payments & Billing
          </NavLink>

          <NavLink
          to='resources'
          className='navlink'>
            Resources
          </NavLink>

          <NavLink
          to='settings'
          className='navlink'>
            Account Settings
          </NavLink>
        </nav>
        <section>
           <Outlet />
        </section>
      </div>
    </section>
  )
}

export default Profile