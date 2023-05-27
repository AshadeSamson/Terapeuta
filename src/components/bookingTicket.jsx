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
    <section>

      <h3 className='succeed-msg'>You have booked a therapist session and here are your details:</h3>
      <div className='ticket-box'>
        <div className='ticket-slip'>
          <h3>Client Name: {data.name}</h3>
          <h3>Appointment Date: {data.appointmentDate}</h3>
          <h3>Appointment Time: {data.time}</h3>
          <h3>Location: {`123 Main Street, Suite 456, Cityville.`}</h3>
          <h3>Contact Number: {`+(1) 023 456 789`}</h3>
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