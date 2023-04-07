import React, { useState } from 'react'
import { Link, Form, redirect} from 'react-router-dom'


export async function action({ request }){

  const signUp = await request.formData()
  const email = signUp.get('email')
  const password = signUp.get('password')
  const confirmPW = signUp.get('passwordConfirm')
  console.log(`email:${email}, password:${password}, confirm:${confirmPW}`)


  return password === confirmPW ? redirect('/login') : null
}



function SignUp() {


  return (
      <Form method='post' className='forms'>

        <div className='input-holder'>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          id="email" 
          className='input' />
        </div>

        <div className='input-holder'>
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          placeholder="Password" 
          name="password" 
          id="password" 
          className='input' />
        </div>

        <div className='input-holder'>
        <label htmlFor="confirm-pw">Confirm Password</label>
        <input 
          type="password" 
          placeholder="Enter Password Again" 
          name="passwordConfirm" 
          id="confirm-pw" 
          className='input' />
        </div>

        <button type="submit">SIGN UP</button>

        <div className='optional'>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </Form>
  )
}

export default SignUp