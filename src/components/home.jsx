import React from 'react'
import { Link } from 'react-router-dom'
import { userAuth } from './contexts/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

function Homepage() {

  const { user } = userAuth()

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

      <section className='about'>
        <div className='section-heading'><h1>About</h1></div>
        <div className='section-body'>
          <p>Welcome to Terapeuta, a trusted source for professional therapy services. Our team of experienced therapists is dedicated to providing compassionate and effective care to help you achieve your mental health and wellness goals.</p>
          <p>At Terapeuta, we understand that life can be challenging, and everyone experiences struggles at some point. We provide a safe and supportive environment for our clients to explore their thoughts and feelings, and we offer personalized treatment plans to meet each client's unique needs.</p>
          <p>Our therapists are highly trained and licensed professionals who specialize in a range of therapeutic techniques, including cognitive-behavioral therapy, solution-focused therapy, and mindfulness-based therapy. We believe that therapy is a collaborative process, and we work closely with our clients to develop personalized goals and strategies to achieve lasting change.</p>
          <p>At Terapeuta, we are committed to fostering a culture of inclusivity, respect, and understanding. We strive to create a welcoming and supportive environment for clients of all backgrounds, cultures, and identities.</p>
          <p>We know that taking the first step towards therapy can be intimidating, but we are here to support you every step of the way. Whether you are seeking individual therapy, couples therapy, or family therapy, we are dedicated to helping you find the path towards healing and growth.</p>
          <p>Thank you for considering Terapeuta as your partner in your mental health journey. We look forward to working with you and helping you achieve your goals.</p>
        </div>
      </section>

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