import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from './contexts/authContext';
import errorRegex from '../fuctions/regex';





function SignUp() {

  const navigate = useNavigate()

  // state variables for form input values
  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
    passwordConfirm:'',
  })
  
  const [action, setAction] = useState(false)

  // state variable for form error 
  const [error, setError] = useState(() => null)

  // values from context
  const { createNewUser } = userAuth()


  // fuction watching and updating changes in input values
  function formChanges(event){

    event.preventDefault();

    const {name, value, type, checked} = event.target
    setFormDetails( prevState => {
        return{...prevState,
            [name]: type === 'checkbox' ? checked : value
        }   
    })
}



    
  // function to handle form submit and sign up
    async function handleSignUp(event){

      event.preventDefault();

      if(formDetails.password === formDetails.passwordConfirm){
          try{
            setAction(true)
            await createNewUser(formDetails.email, formDetails.password); 
          }catch(e){
            setError(errorRegex(e.message))
          }finally{
            navigate('/profile', {replace: true}); 
            setAction(false)
          }
      }else{
        setError('passwords do not match')
      }
    }



  return (
    <section className='forms'>

      <h1 className='form-header'>Sign-Up for an Account</h1>

      <form onSubmit={handleSignUp}>

        {error && <h5 className='error red'>{error}</h5>}

        <div className='input-holder'>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          id="email" 
          className='input'
          onChange={formChanges}
          value={formDetails.email}
          required />
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
          value={formDetails.password}
          required
          minLength='6'
          maxLength='18' />
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
          value={formDetails.passwordConfirm}
          required
          minLength='6'
          maxLength='18' />
        </div>

        <button type="submit">{action ? 'SIGNING UP...' : 'SIGN UP'}</button>

        <div className='optional'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </form>
    </section>
  )
}

export default SignUp