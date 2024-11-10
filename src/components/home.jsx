import React from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from './contexts/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import About from './sub-components/about';

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

      <About />

      <section className='contact'>
      <div className='section-heading'><h1>Contact</h1></div>
        <p className='first-line'>To get in touch with us, you can:</p>
        <hr />
        <ul>
          <li>Call us at +1-234-567-890</li>
          <li>Email us at infothe@terapeuta.ty</li>
        </ul>
        <hr />
        <p>Our friendly and knowledgeable staff will respond to your inquiry as soon as possible, typically within 24-48 hours.</p>
        <p>We look forward to hearing from you and supporting you in your mental health journey.</p>
      </section>

      <section className='copyright'>
        <h1><FontAwesomeIcon icon={faCopyright} size='1x'/> Copyright 2023 Terapeuta</h1>
      </section>


    </div>
  )
}

export default Homepage