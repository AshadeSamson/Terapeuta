import { serverTimestamp } from 'firebase/firestore'
import React from 'react'
import { Form, redirect, useNavigation } from 'react-router-dom'
import { toast } from 'react-toastify'
import { getRandomNumber } from '../utils/randomNumber'



export const action = (userContext) => async ({request}) => {


  // getting form details
  const booking = await request.formData()

  // Accessing context values
  const { user, addNewBooking, globalAddNewBooking, getLinks } = userContext

  // getting session links available
  const virtualSessions = await getLinks()
  const sessionData = virtualSessions[getRandomNumber()]

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
    sessionLink: sessionData.sessionLink,
    sessionId: sessionData.sessionId,
  }

  try {
    // Booking a new ticket and getting the ticket ID
    const ticket = await addNewBooking(user.uid, bookingDetails);
    const bookingID = ticket.id;

    // Prepare data for global collection
    const details = {
      ...bookingDetails,
      userID: user.uid,
      appointmentID: bookingID,
    };

    // Add booking to global collection
    await globalAddNewBooking(details);

    toast.success("Appointment booked successfully");

    // Navigate to the booking ticket page
    return redirect(`/booking/${user.uid}/${bookingID}`);

  } catch (error) {
    toast.error("Failed to book appointment. Please try again.");
    return null; 
  }
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
            value="cognitive-behaviour" 
            name="therapyType" 
            id="cognitive"
            className='radio'
            required />
          <label htmlFor="cognitive">Cognitive Behaviour</label>
          </div>
          <div className="radio-holder">
          <input 
            type="radio" 
            value="mindfulness-based" 
            name="therapyType" 
            id="mindfulness"
            className='radio'
            required />
          <label htmlFor="mindfulness">Mindfulness-Based</label>
          </div>
          <div className="radio-holder">
          <input 
            type="radio" 
            value="career & life coaching" 
            name="therapyType" 
            id="careerLife"
            className='radio'
            required />
          <label htmlFor="careerLife">Career & Life Coaching</label>
          </div>
        </fieldset>
      </div>

      <div className='input-holder'>
        <label htmlFor="date">Preferred Date of Appointment</label>
        <input 
          type="date" 
          name="date" 
          id="date"
          min={new Date(new Date().setDate(new Date().getDate() + 7))
            .toISOString()
            .split("T")[0]}
          max={new Date(new Date().setDate(new Date().getDate() + 28))
            .toISOString()
            .split("T")[0]}  
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