import React from 'react'
import { useLoaderData } from 'react-router-dom';


export const loader = (userContext) => async ({ params }) => {

  const { getNewBooking } = userContext

  const ticket = await getNewBooking(params.uid, params.id)

  if(ticket.exists()){

      return ticket.data()

  } 
  

}

function BookingTicket() {

  const data = useLoaderData()
  console.log(data)

  

  return (
    <div>
        <h1>Appointment Booked</h1>
    </div>
  )
}

export default BookingTicket