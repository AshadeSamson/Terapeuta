import React, { useState } from 'react'
import { userAuth } from '../contexts/authContext';
import { Link, Outlet, useOutletContext } from 'react-router-dom'

function Settings() {

  const { user, updateUser, currentUSER, changeEmail, verifyEmail} = userAuth()

  const [profile, setProfile] = useState({
    name:'',
    newEmail:'',
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




  return (
    <div className='settings'>

      <form onSubmit={updateUserName}>
        <div className='input-holder'>
          <label htmlFor="name">Update Profile Name</label>
          <input 
            type="text" 
            placeholder="Full Name" 
            name="name" 
            id="name" 
            className='input'
            onChange={profileChanges}
            value={profile.name}
            required/>
        </div>
        <button type="submit">Update Name</button>
      </form>

      <form onSubmit={updateUserEmail}>
        <div className='input-holder'>
          <label htmlFor="new-email">Change Email</label>
          <input 
            type="email" 
            placeholder="enter new email" 
            name="newEmail" 
            id="new-email" 
            className='input'
            onChange={profileChanges}
            value={profile.newEmail}
            required/>
        </div>
        <button type="submit">Update Email</button>
      </form>

      <form onSubmit={verifyUserEmail}>
        <div className='input-holder'>
          <label htmlFor="verify-email">Verify Email</label>
          <input 
            type="email" 
            name="verifyEmail" 
            id="verify-email" 
            className='input'
            value={user.email}
            readOnly
            required/>
        </div>
        <button type="submit">Verify Email</button>
      </form>

    </div>
  )
}

export default Settings