import React, {useEffect, useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { userAuth } from './contexts/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCircleCheck, faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

function Profile() {

  const [profileUpdate, setProfileUpdate] = useState(false)

  useEffect(() => {
    return undefined
  },[profileUpdate])

  const { user } = userAuth()
  console.log(user)

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
          <div className='email-box'>
            <h5 className='email'>{user.email}</h5>
            <div>
              {user.emailVerified ?
               <FontAwesomeIcon icon={faCircleCheck} size='x' className='verify-icon'/>:
               <FontAwesomeIcon icon={faCircleQuestion} size='x' className='unverify-icon'/>
              }
            </div>
          </div>
        </div>
        <div className='user-greet'>
          <h1>{greet}, {user.displayName !== null ? user.displayName : 'Anonymous'}.</h1>
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
        <section className='user-profile-outlet'>
           <Outlet  context={ {setProfileUpdate} }/>
        </section>
      </div>
    </section>
  )
}

export default Profile