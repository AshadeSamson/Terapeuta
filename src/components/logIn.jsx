import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuth } from './contexts/authContext';
import errorRegex from '../fuctions/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'




function Login() {

  const navigate = useNavigate()

  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
  })

  const [action, setAction] = useState(false)


  // state variable for form error 
  const [error, setError] = useState(() => null)

  // values from context
  const { loginUser } = userAuth()

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
  async function handleLogin(event){

    event.preventDefault();

        try{
          setAction(true)
          await loginUser(formDetails.email, formDetails.password);
        }catch(e){
          setError(errorRegex(e.message))
        }finally{
          navigate('/profile', {replace: true});
          setAction(false)
        }
    
  }

  return (

<section className='forms'>

    <h1 className='form-header'>Log-in to Your Account</h1>

    <form onSubmit={handleLogin}>

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
            required 
          />
        </div>

        <div className='input-holder'>
          <label htmlFor="Password">Password</label>
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
            maxLength='18'
          />
        </div>


        <button disabled={action === true} type="submit">{action ? 'LOGGING IN...' : 'LOG IN'}</button>

        <div className='optional'>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>

    </form>
</section>

  )
}

export default Login