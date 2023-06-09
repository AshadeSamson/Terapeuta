import React from 'react'
import { useLoaderData } from 'react-router-dom';


export const loader = (userContext) => async ({ params }) => {

  const { getNewBooking } = userContext

  const ticket = await getNewBooking(params.uid, params.id)

  return ticket.data()
  

}




function BookingTicket() {

  const data = useLoaderData()

  

  return (
    <section className='sections'>

      <h3 className='sections-header succeed-msg'>You have booked a therapist session and here are your details:</h3>
      <div className='ticket-box'>
        <div className='ticket-slip'>
          <h3>Client Name: <span className='special-text'>{data.name}</span></h3>
          <h3>Appointment Date: <span className='special-text'>{data.appointmentDate}</span></h3>
          <h3>Appointment Time: <span className='special-text'>{data.time}</span></h3>
          <h3>Location: <span className='special-text'>{`123 Main Street, Suite 456, Cityville.`}</span></h3>
          <h3>Contact Number: <span className='special-text'>{`+(1) 023 456 789`}</span></h3>
        </div>
        <div className='print-ticket'>
          <button>Print Ticket</button>
        </div>
      </div>
      
      <div className='contact'>
        <p>Please arrive 10 minutes prior to your scheduled appointment time. If you need to cancel or reschedule your appointment, please contact us at least 24 hours in advance.</p>
        <p>We look forward to seeing you soon. If you have any questions or concerns, please feel free to reach out to us.</p>
        <p>Thank you, <br/><strong>The Terapeuta Team</strong></p>
      </div>
        
    </section>
  )
}

export default BookingTicket