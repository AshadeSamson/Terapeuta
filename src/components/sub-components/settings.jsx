import React, { useState } from 'react'
import { userAuth } from '../contexts/authContext';
import { Link, Outlet, useOutletContext } from 'react-router-dom'
import errorRegex from '../../fuctions/regex';

function Settings() {


  // Values and Functions from authentication context
  const { user, 
          updateUser, 
          currentUSER, 
          changeEmail, 
          verifyEmail, 
          changePassword} = userAuth()

   // Props from outlet context 
  const { setProfileUpdate } = useOutletContext()


  // Initial State Value for FormData
  const profileInitialValue = {
    firstName:'',
    lastName:'',
    newEmail:'',
    newPassword:'',
    newPasswordConfirm:'',
  }

  const [profile, setProfile] = useState(profileInitialValue)


  // Error States
  const [profileUpdateError, setProfileUpdateError] = useState(() => null)
  const [emailUpdateError, setEmailUpdateError] = useState(() => null)
  const [passwordError, setPasswordError] = useState(() => null)
  const [verifyEmailError, setVerifyEmailError] = useState(() => null)



  // FormData and Inputs control
  function profileChanges(event){
      event.preventDefault();
      const {name, value, type, checked} = event.target
      setProfile( prevState => {
          return{...prevState,
              [name]: type === 'checkbox' ? checked : value
          }   
      })
  }


  // Fuction to update user display Name
  async function updateUserName(e){
    e.preventDefault();
    const userName = `${profile.firstName} ${profile.lastName}`
    try {
      await updateUser(user, userName)
      console.log('user profile updated')
    } catch (error) {
       setProfileUpdateError(errorRegex(error.message)) 
    } finally{
      setProfile(profileInitialValue)
      setProfileUpdate(prev => !prev)
    }
  }


  // function to change user email address
  async function updateUserEmail(e){
    e.preventDefault();
    try {
      await changeEmail(currentUSER, profile.newEmail)
      console.log('user email updated')
    } catch (error) {
      setEmailUpdateError(errorRegex(error.message))
    } finally{
      setProfile(profileInitialValue)
      setProfileUpdate(prev => !prev)
    }
  }



  // function to verify user email address
  async function verifyUserEmail(e){
    e.preventDefault();
    try {
      await verifyEmail(currentUSER)
      console.log('User is now verified')
    } catch (error) {
      setVerifyEmailError(errorRegex(error.message))
    } finally{
      setProfile(profileInitialValue)
      setProfileUpdate(prev => !prev)
    }
  }



  // function to change user password
  async function updateUserPassword(e){
    e.preventDefault();
    if(profile.newPassword === profile.newPasswordConfirm){
      try{
        await changePassword(currentUSER, profile.newPassword)
        console.log('password updated') 
      } catch(error){
        setPasswordError(errorRegex(error.message))
      } finally{
        setProfile(profileInitialValue)
        setProfileUpdate(prev => !prev)
      }
    }
    else{
      setPasswordError('Password do not match!')
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
              maxLength='10' 
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
              maxLength='10'  
              className='input settings-input'
              onChange={profileChanges}
              value={profile.lastName}
              required/>
          </div>
          <div className='settings-box'>
            <button className='settings-button' type="submit">Update Name</button>
          </div>
        </div>
        {profileUpdateError && <h5 className='error red'>{profileUpdateError}</h5>}
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
            <button disabled={user.emailVerified === true} className='settings-button' type="submit">
              {user.emailVerified ? 'Verified' :'Verify Email'}</button>
          </div>
        </div>
        {verifyEmailError && <h5 className='error red'>{verifyEmailError}</h5>}
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
        {emailUpdateError && <h5 className='error red'>{emailUpdateError}</h5>}
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
        {passwordError && <h5 className='error red'>{passwordError}</h5>}
      </form>

    </div>
  )
}

export default Settings