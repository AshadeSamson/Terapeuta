import React, { useState } from 'react'
import { Form } from 'react-router-dom'



export async function action({request}){

  const booking = await request.formData()
  const fullName = booking.get('name')
  const mail = booking.get('email')
  const phone = booking.get('phone')
  const contactMethod = booking.get('contactMethod')
  const therapyType = booking.get('therapyType')
  const bookDate = booking.get('date')
  const time = booking.get('time')

  console.log(`name = ${fullName}, mail = ${mail}, phoneNo = ${phone}, contactMethod = ${contactMethod}, therapy Type = ${therapyType}, preferred date = ${bookDate}, time = ${time}`)


  return null
}

function Booking() {


  return (
   <section className='forms'>
    <Form method='post'>

      <div className='input-holder'>
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          placeholder="Full Name" 
          name="name" 
          id="name" 
          className='input'/>
      </div>

      <div className='input-holder'>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          id="email" 
          className='input'/>
      </div>

      <div className='input-holder'>
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          placeholder="Phone No" 
          name="phone" 
          id="phone" 
          className='input'/>
      </div>

      <div className='input-holder'>
        <fieldset>
          <legend>Preferred method of contact</legend>
          <input 
            type="radio" 
            value="Phone" 
            name="contactMethod" 
            id="contact-phone" />
          <label htmlFor="contact-phone">Phone</label>
          <input 
            type="radio" 
            value="Email" 
            name="contactMethod" 
            id="contact-email" />
          <label htmlFor="contact-email">E-mail</label>
        </fieldset>
      </div>

      <div className='input-holder'>
        <fieldset>
          <legend>Type of therapy requested</legend>
          <input 
            type="radio" 
            value="individual" 
            name="therapyType" 
            id="individual" />
          <label htmlFor="individual">Individual</label>
          <input 
            type="radio" 
            value="couples" 
            name="therapyType" 
            id="couples" />
          <label htmlFor="couples">Couples</label>
          <input 
            type="radio" 
            value="family" 
            name="therapyType" 
            id="family" />
          <label htmlFor="family">Family</label>
        </fieldset>
      </div>

      <div className='input-holder'>
        <label htmlFor="date">Preferred Date of Appointment</label>
        <input 
          type="date" 
          name="date" 
          id="date" />
      </div>

      <div className='input-holder'>
        <label htmlFor="time">Preferred Time for Appointment</label>
        <select name="time" id="time">
          <option value="">--Select your preferred time--</option>
          <option value="morning">Morning, 9.00 AM</option>
          <option value="afternoon">Afternoon, 1.00 PM</option>
          <option value="evening">Evening, 5.30 PM</option>
        </select>
      </div>

      <button type="submit">Submit</button>

    </Form>

   </section>
  )
}

export default Booking