import React from 'react'
import { useRouteError } from 'react-router-dom'

function BookingError() {

    const error = useRouteError()
    console.log(error)
    
  return (
    <div>BookingError</div>
  )
}

export default BookingError