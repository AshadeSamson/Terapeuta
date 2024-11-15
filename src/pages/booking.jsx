import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'



export const action = (userContext) => async ({request}) => {


  // getting form details
  const booking = await request.formData()

  // Accessing context values
  const { user, addNewBooking } = userContext


  const bookingDetails = {
    timing: serverTimestamp(),
    name: booking.get('name'),
    mail: booking.get('email'),
    phone: booking.get('phone'),
    contactMethod: booking.get('contactMethod'),
    therapyType: booking.get('therapyType'),
    appointmentDate: booking.get('date'),
    time: booking.get('time'),
    reason: booking.get('reason'),
    comments: booking.get('comments'),
  }

  // booking a new ticket and getting the ticket ID
  const ticket = await addNewBooking(user.uid, bookingDetails)
  const bookingID = await ticket.id

  toast.success("Appointment booked successfully")
 
  // navigating to the booking ticket page
  return redirect(`/booking/${user.uid}/${bookingID}`);   

}




function Booking() {


  const navigation = useNavigation()


  return (
   <section className='forms'>

    <h1 className='form-header'>Book an Appointment</h1>

    <Form method='post' id='booking'>

      <div className='input-holder'>
        <label htmlFor="name">First Name</label>
        <input 
          type="text" 
          placeholder="FirstName Only" 
          name="name" 
          id="name" 
          className='input'
          maxLength='12'
          required/>
      </div>

      <div className='input-holder'>
        <label htmlFor="email">E-mail</label>
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email" 
          id="email" 
          className='input'
          required/>
      </div>

      <div className='input-holder'>
        <label htmlFor="phone">Phone</label>
        <input 
          type="tel" 
          placeholder="Phone No" 
          name="phone" 
          id="phone" 
          className='input'
          required
          minLength='8'
          maxLength='15'/>
      </div>

      <div className='radio-box'>
        <fieldset>
          <legend>Preferred Method of Contact</legend>
          <div className='radio-holder'>
          <input 
            type="radio" 
            value="Phone" 
            name="contactMethod" 
            id="contact-phone"
            className='radio' 
            required/>
          <label htmlFor="contact-phone">Phone</label>
          </div>
          <div className='radio-holder'>
          <input 
            type="radio" 
            value="Email" 
            name="contactMethod" 
            id="contact-email"
            className='radio'
            required />
          <label htmlFor="contact-email">E-mail</label>
          </div>
        </fieldset>
      </div>

      <div className='input-holder'>
        <label htmlFor="reason">Reason for Seeking Therapy</label>
        <textarea 
          name="reason" 
          id="reason" 
          cols="30" 
          rows="10"
          maxLength="100"
          placeholder='Why are you seeking therapy...'
          className='textarea'
          form='booking'>
        </textarea>
      </div>

      <div className='radio-box'>
        <fieldset>
          <legend>Type of Therapy Requested</legend>
          <div className="radio-holder">
          <input 
            type="radio" 
            value="individual" 
            name="therapyType" 
            id="individual"
            className='radio'
            required />
          <label htmlFor="individual">Individual</label>
          </div>
          <div className="radio-holder">
          <input 
            type="radio" 
            value="couples" 
            name="therapyType" 
            id="couples"
            className='radio'
            required />
          <label htmlFor="couples">Couples</label>
          </div>
          <div className="radio-holder">
          <input 
            type="radio" 
            value="family" 
            name="therapyType" 
            id="family"
            className='radio'
            required />
          <label htmlFor="family">Family</label>
          </div>
        </fieldset>
      </div>

      <div className='input-holder'>
        <label htmlFor="date">Preferred Date of Appointment</label>
        <input 
          type="date" 
          name="date" 
          id="date"
          min={new Date().toISOString().split('T')[0]} 
          className='input'
          required/>
      </div>

      <div className='input-holder'>
        <label htmlFor="time">Preferred Time for Appointment</label>
        <select name="time" id="time" className='select' required>
          <option value="">--Select your preferred time--</option>
          <option value="9.00 AM">Morning, 9.00 AM</option>
          <option value="1.00 PM">Afternoon, 1.00 PM</option>
          <option value="5.30 PM">Evening, 5.30 PM</option>
        </select>
      </div>

      <div className='input-holder'>
        <label htmlFor="comments">Additional Information or comments</label>
        <textarea 
          name="comments" 
          id="comments" 
          cols="30" 
          rows="10"
          placeholder='Any extra info you would like to let us know...'
          className='textarea'
          maxLength="100"
          form='booking'>
        </textarea>
      </div>

      <button disabled={navigation.state === 'submitting' | 'loading'} type="submit">
        {
          navigation.state === 'submitting' | 'loading' ?
          'Booking Your Session...':'BOOK'
        }
      </button>

    </Form>
   </section>
  )
}

export default Booking