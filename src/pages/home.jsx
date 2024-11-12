import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useApp } from '../context/appContext'
import Services from '../components/landingPage/services';
import Testimonials from '../components/landingPage/testimonials';
import AboutUs from '../components/landingPage/aboutUs';
import Contact from '../components/landingPage/contact';
import Faqs from '../components/landingPage/faqs';


function Homepage() {

  const { user, isLoading } = useApp()
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.sectionId) {
      scroller.scrollTo(location.state.sectionId, {
        smooth: true,
        duration: 500,
        // offset: -70,
      });
    }
  }, [location.state]);

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

      <section id="about"><AboutUs /></section>

      <section id="services"><Services /></section>

      <section><Testimonials /></section>

      <section id="contact"><Contact /></section>

      <section id="faqs"><Faqs /></section>
    </div>
  )
}

export default Homepage