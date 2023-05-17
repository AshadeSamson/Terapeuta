import React, { useState } from 'react'
import { userAuth } from '../contexts/authContext';
import { Link, Outlet, useOutletContext } from 'react-router-dom'

function Settings() {

  const { user, updateUser, currentUSER, changeEmail, verifyEmail} = userAuth()

  const [profile, setProfile] = useState({
    firstName:'',
    lastName:'',
    newEmail:'',
    newPassword:'',
    newPasswordConfirm:'',
  })

  const { setProfileUpdate } = useOutletContext()




  function profileChanges(event){

      event.preventDefault();

      const {name, value, type, checked} = event.target
      setProfile( prevState => {
          return{...prevState,
              [name]: type === 'checkbox' ? checked : value
          }   
      })
  }


  async function updateUserName(e){
    e.preventDefault();
    try {
      await updateUser(user, profile.name)
      setProfileUpdate(prev => {!prev})
      console.log('user profile updated')
    } catch (error) {
       const msg = error.message.toLowerCase()
       console.log(msg) 
    }
  }

  async function updateUserEmail(e){
    e.preventDefault();
    try {
      await changeEmail(currentUSER, profile.newEmail)
      setProfileUpdate(prev => {!prev})
      console.log('user email updated')
    } catch (error) {
      const msg = error.message.toLowerCase()
      console.log(msg)
    }
  }


  async function verifyUserEmail(e){
    e.preventDefault();
    try {
      await verifyEmail(currentUSER)
      setProfileUpdate(prev => {!prev})
      console.log('User is now verified')
    } catch (error) {
      const msg = error.message.toLowerCase()
      console.log(msg)
    }
  }


  function updateUserPassword(e){
    e.preventDefault();
    if(profile.newPassword === profile.newPasswordConfirm){
      console.log('password match')
    }
    else{
      console.log('passwords must match')
    }

  }




  return (
    <div className='settings'>

      {/* Update User Profile Name */}
      <form  className='settings-form' onSubmit={updateUserName}>
        <h4>Profile Info Update</h4>
        <div className='settings-input-holder'>
          <div className='settings-box'>
            <input 
              type="text" 
              placeholder="First Name" 
              name="firstName" 
              className='input settings-input'
              onChange={profileChanges}
              value={profile.firstName}
              required/>
          </div>
          <div className='settings-box'>
            <input 
              type="text" 
              placeholder="Last Name" 
              name="lastName" 
              className='input settings-input'
              onChange={profileChanges}
              value={profile.lastName}
              required/>
          </div>
          <div className='settings-box'>
            <button className='settings-button' type="submit">Update Name</button>
          </div>
        </div>
      </form>


      {/* Verify User Email Address */}
      <form  className='settings-form' onSubmit={verifyUserEmail}>
        <h4>Email Verification</h4>
        <div className='settings-input-holder'>
          <div className='settings-box'>
            <input 
              type="email" 
              name="verifyEmail" 
              className='input settings-input verify-email'
              value={user.email}
              readOnly
              required/>
          </div>
          <div className='settings-box'>
            <button className='settings-button' type="submit">Verify Email</button>
          </div>
        </div>
      </form>


      {/* Update or Change User Email Address */}
      <form className='settings-form' onSubmit={updateUserEmail}>
        <h4>Email Address Update</h4>
        <div className='settings-input-holder'>
          <div>
            <input 
              type="email" 
              placeholder="Enter New Email" 
              name="newEmail" 
              className='input settings-input'
              onChange={profileChanges}
              value={profile.newEmail}
              required/>
          </div>
          <div>
            <button className='settings-button' type="submit">Update Email</button>
          </div>
        </div>
      </form>


      {/* Change User Password */}
      <form  className='settings-form' onSubmit={updateUserPassword}>
        <h4>Password Update</h4>
        <div className='settings-input-holder'>
          <div className='settings-box'>
            <input 
              type="password" 
              placeholder="New Password" 
              name="newPassword" 
              className='input settings-input'
              onChange={profileChanges}
              value={profile.newPassword}
              minLength='6'
              maxLength='18'
              required/>
          </div>
          <div className='settings-box'>
            <input 
              type="password" 
              placeholder="Confirm Password" 
              name="newPasswordConfirm" 
              className='input settings-input'
              onChange={profileChanges}
              value={profile.newPasswordConfirm}
              minLength='6'
              maxLength='18'
              required/>
          </div>
          <div className='settings-box'>
            <button className='settings-button' type="submit">Change Password</button>
          </div>
        </div>
      </form>

    </div>
  )
}

export default Settings