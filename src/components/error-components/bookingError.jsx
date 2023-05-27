import React from 'react'
import { useRouteError } from 'react-router-dom'

function RouteError() {

    const error = useRouteError()

  return (
    <div>
        <h1>We are sorry! An Error Occured.</h1>
        <h3 className='error red'>{error.message}</h3>
    </div>
  )
}

export default RouteError