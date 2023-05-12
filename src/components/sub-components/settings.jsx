import React, { useState } from 'react'
import { userAuth } from '../contexts/authContext';
import { Link, Outlet, useOutletContext } from 'react-router-dom'

function Settings() {

  const { user, updateUser} = userAuth()

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


  async function updateName(e){
    e.preventDefault();
    try {
      await updateUser(user, profile.name)
      setProfileUpdate(prev => {!prev})
      e.target.reset()
      console.log('user profile updated')
    } catch (error) {
       const msg = error.message.toLowerCase()
       console.log(msg) 
    }
    
  }

  function updateEmail(e){
    e.preventDefault();
    console.log(profile.newEmail)
  }




  return (
    <div className='settings'>

      <form onSubmit={updateName}>
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

      <form onSubmit={updateEmail}>
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

    </div>
  )
}

export default Settings