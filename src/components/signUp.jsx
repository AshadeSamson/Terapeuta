import React, { useState } from 'react'
import { Link, Navigate, redirect } from 'react-router-dom'





function SignUp() {

  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
    passwordConfirm:'',
  })


  function formChanges(event){

    event.preventDefault();

    const {name, value, type, checked} = event.target

   
    setFormDetails( prevState => {
        return{...prevState,
            [name]: type === 'checkbox' ? checked : value
        }   
    })
}



    function handleSignUp(event){

      event.preventDefault();

      if(formDetails.password === formDetails.passwordConfirm){
        console.log('successfully signup')

      }else{
        console.log('error in signing up user')
      }

    }



  return (
      <form onSubmit={handleSignUp}>

        <div className='input-holder'>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          id="email" 
          className='input'
          onChange={formChanges}
          value={formDetails.email} />
        </div>

        <div className='input-holder'>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          id="password" 
          className='input'
          onChange={formChanges}
          value={formDetails.password} />
        </div>

        <div className='input-holder'>
        <label htmlFor="confirm-pw">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Enter Password Again" 
          name="passwordConfirm" 
          id="confirm-pw" 
          className='input'
          onChange={formChanges}
          value={formDetails.passwordConfirm} />
        </div>

        <button type="submit">SIGN UP</button>

        <div className='optional'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
  )
}

export default SignUp