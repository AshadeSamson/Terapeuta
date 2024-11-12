import React from 'react'
import { useRouteError } from 'react-router-dom'
import Footer from '../footer'

function RouteError() {

    const error = useRouteError()

  return (
    <>
    <div className='sections'>
        <h1>We are sorry! An Error Occured.</h1>
        <h3 className='error red'>{error.message}</h3>
    </div>
    <Footer />
    </>
  )
}

export default RouteError