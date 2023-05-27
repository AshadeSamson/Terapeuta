import React from 'react'
import { useRouteError } from 'react-router-dom'

function BookingError() {

    const error = useRouteError()
    console.log(error.message)

  return (
    <div>
        <h1>There was an Error and your appointment couldn't be booked.</h1>
    </div>
  )
}

export default BookingError