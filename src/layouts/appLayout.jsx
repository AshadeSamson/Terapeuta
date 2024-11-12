import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Header from '../components/header'
import Footer from '../components/footer';


function AppLayout() {

    // State to handle Hamburger Menu on Mobile View
    const [mobileNav, setMobileNav] = useState(() => false);

    function toggleNav(){
      setMobileNav(prevState => !prevState)
    }



  return (
    <div>
        <Header 
        mobileNav={mobileNav}
        toggleNav={toggleNav}/>
        <section className='main'>
            <Outlet />
        </section>
        <ToastContainer 
        position='top-center'/>
        <Footer />
    </div>
  )
}

export default AppLayout