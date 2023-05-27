import React from 'react'
import { useParams } from 'react-router-dom'

function BookingTicket() {

    const params = useParams()
    console.log(params)

  return (
    <div>
        <h1>Appointment Booked</h1>
    </div>
  )
}

export default BookingTicket