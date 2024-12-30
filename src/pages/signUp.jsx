import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/appContext'
import errorRegex from '../utils/regex.js'
import { toast } from 'react-toastify';






function SignUp() {

  const navigate = useNavigate()

  // state variables for form input values
  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
    passwordConfirm:'',
    agreement: false,
  })
  
  const [action, setAction] = useState(false)

  // state variable for form error 
  const [error, setError] = useState(() => null)

  // values from context
  const { createNewUser, addNewUser, user } = useApp()


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

      if (!formDetails.agreement) {
        setError('You must agree to the privacy policy to sign up.');
        return; 
      }

      if(formDetails.password === formDetails.passwordConfirm){

          try{
            setAction(true);
            const getUser = await createNewUser(formDetails.email, formDetails.password); 
            await addNewUser(getUser.user.uid);  
            toast.success("Account successfully created");
            setTimeout(() => navigate('/profile', { replace: true }), 200);
          }catch(e){
            setError(errorRegex(e.message))
          }finally{
            setAction(false);
          }
      }else{
        setError('passwords do not match')
      }
    }

    useEffect(() => {
      if (user) {
        navigate('/profile', { replace: true });
      }
    }, [user, navigate]);



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

        <div className='optional agreed'>
        <input 
              type="checkbox" 
              checked={formDetails.agreement} 
              name="agreement" 
              id="agreement"
              className='agreement' 
              onChange={formChanges}
              required />
          <p>I have read and agreed to the <Link to="/privacypolicy">Privacy Policy</Link>
          </p>
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