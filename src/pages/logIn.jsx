import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../context/appContext'
import errorRegex from '../utils/regex.js'
import { toast } from 'react-toastify';
import ResetPasswordModal from '../components/resetPassword.jsx';





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
  const { loginUser, user } = useApp()

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
          setTimeout(() => navigate('/profile', { replace: true }), 200);
        }catch(e){
          setError(errorRegex(e.message))
          toast.warning("Login failed. Please check your credentials or connection and try again");
        }finally{
          setAction(false)
        }
  }


  useEffect(() => {
    if (user) {
      navigate('/profile', { replace: true });
    }
  }, [user, navigate]);



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