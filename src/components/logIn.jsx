import React, { useState } from 'react'
import { Link } from 'react-router-dom'




function Login() {

  const [formDetails, setFormDetails] = useState({
    email:'',
    password:'',
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



    function handleLogin(event){

      event.preventDefault();

     console.log(formDetails.email, formDetails.password)
    }


  return (
      <form onSubmit={handleLogin}>

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
          />
        </div>


        <button type="submit">LOG IN</button>

        <div className='optional'>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>

      </form>
  )
}

export default Login