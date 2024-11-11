import React from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from '../context/authContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import Services from '../components/landingPage/services';
import Testimonials from '../components/landingPage/testimonials';
import AboutUs from '../components/landingPage/aboutUs';
import Contact from '../components/landingPage/contact';
import Faqs from '../components/landingPage/faqs';

function Homepage() {

  const { user, isLoading } = userAuth()

  return (
    <div>
      <section className='hero'>
        <div className='hero-text'>
          <h1 className='hero-caption'>
            {user !== null ? 'Transform Your Life: Discover a Happier and Healthier You with Expert Therapy Sessions' : 'Find Balance and Fulfillment: Discover the Power of Therapy for a Better Life'}
          </h1>
        </div>
        {
          user !== null ? 
          <Link to='booking'>
          <button>Book a session</button>
          </Link> : 
          <Link to='signup'>
          <button>Get started here</button>
          </Link>
        }
      </section>

      <AboutUs />
      <Services />
      <Testimonials />
      <Contact />
      <Faqs />

      <section className='copyright'>
        <h1><FontAwesomeIcon icon={faCopyright} size='1x'/> Copyright 2023 Terapeuta</h1>
      </section>


    </div>
  )
}

export default Homepage