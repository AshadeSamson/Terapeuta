import React from 'react'

function Booking() {


  return (
   <section className='forms'>
    <form action="">
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
          name="contact-method" 
          id="contact-phone" 
          className='input'/>
        <label htmlFor="contact-phone">Phone</label>
        <input 
          type="radio" 
          value="Email" 
          name="contact-method" 
          id="contact-email" 
          className='input'/>
        <label htmlFor="contact-email">E-mail</label>
        </fieldset>
      </div>
      <div className='input-holder'>
        <fieldset>
        <legend>Type of therapy requested</legend>
        <input 
          type="radio" 
          value="individual" 
          name="therapy-type" 
          id="individual" 
          className='input'/>
        <label htmlFor="individual">Individual</label>
        <input 
          type="radio" 
          value="couples" 
          name="therapy-type" 
          id="couples" 
          className='input'/>
        <label htmlFor="couples">Couples</label>
        <input 
          type="radio" 
          value="family" 
          name="therapy-type" 
          id="family" 
          className='input'/>
        <label htmlFor="family">Family</label>
        </fieldset>
      </div>
      <div className='input-holder'>
        <label htmlFor="date">Preferred Day of Appointment</label>
        <input 
          type="date" 
          name="date" 
          id="date" 
          className='input'/>
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
    </form>

   </section>
  )
}

export default Booking