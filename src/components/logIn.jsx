import React, { useState } from 'react'
import { Link, Form, redirect } from 'react-router-dom'


export async function action({ request }){

  const loginDetails = await request.formData()
  const email = loginDetails.get('email')
  const password = loginDetails.get('password')
  console.log(`email:${email}, password:${password}`)

  return redirect('/profile');
}



function Login() {


  return (
      <Form method='post' className='forms'>

        <div className='input-holder'>
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            placeholder="Email Address" 
            name="email" 
            id="email" 
            className='input' 
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
          />
        </div>


        <button type="submit">LOG IN</button>

        <div className='optional'>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>

      </Form>
  )
}

export default Login