import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header'

function AppLayout() {
  return (
    <div>
        <Header />
        <section className='main'>
            <Outlet />
        </section>
    </div>
  )
}

export default AppLayout