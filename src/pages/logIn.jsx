import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useApp } from '../context/appContext'
import errorRegex from '../utils/regex.js'
import { toast } from 'react-toastify';
import ResetPasswordModal from '../components/resetPassword.jsx';





function Login() {

  const navigate = useNavigate()
  const location = useLocation()

  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
  })

  const [action, setAction] = useState(false)


  // state variable for form error 
  const [error, setError] = useState(() => null)

  // values from context
  const { loginUser, user } = useApp()

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Redirect message state
  const [redirectMessage, setRedirectMessage] = useState(false);

  // Check if the user was redirected to the login page
  useEffect(() => {
    if (location.state && location.state.from) {
      setRedirectMessage(true);

      // Auto-clear the message after 5 seconds
      const timer = setTimeout(() => {
        setRedirectMessage(false);
      }, 3000);

      // Cleanup the timer on component unmount
      return () => clearTimeout(timer);
    }
  }, [location]);

  // handle form changes
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
          toast.success("User login successful");
          const redirectPath = location.state?.from?.pathname || '/profile';
          setTimeout(() => navigate(redirectPath, { replace: true }), 100);
        }catch(e){
          setError(errorRegex(e.message))
          toast.warning("Login failed. Please check your credentials or connection and try again");
        }finally{
          setAction(false)
        }
  }


  // If the user is already logged in, redirect to profile or the last visited route
  useEffect(() => {
    if (user) {
      const redirectPath = location.state?.from?.pathname || '/profile';
      navigate(redirectPath, { replace: true });
    }
  }, [user, navigate, location]);



  return (

<section className='forms'>

    {redirectMessage && (
          <p className="info-message">
            You must log in to access the page you were trying to visit.
          </p>
    )}

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
          <p>Forgotten password? <Link onClick={openModal}>Click here</Link></p>
        </div>
        <br />
        <div className='optional'>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    </form>
    <ResetPasswordModal isOpen={isModalOpen} onClose={closeModal}/>
</section>

  )
}

export default Login