import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { scroller } from 'react-scroll';
import { useApp } from '../context/appContext'
import Services from '../components/landingPage/services';
import Testimonials from '../components/landingPage/testimonials';
import HowItWorks from '../components/landingPage/howItWorks';
import Contact from '../components/landingPage/contact';
import Faqs from '../components/landingPage/faqs';
import Hero from '../components/landingPage/hero';
import ChatbotFeature from '../components/landingPage/chatFeature';


function Homepage() {

  const { user, isLoading } = useApp()
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.sectionId) {
      scroller.scrollTo(location.state.sectionId, {
        smooth: true,
        duration: 500,
      });
    }
  }, [location.state]);

  return (
    <div>

      <Hero user={user}/>

      <section id="services"><Services /></section>

      <section id="howItWorks"><HowItWorks /></section>

      <section id="chatfeature"><ChatbotFeature /></section>

      <section id="testimonials"><Testimonials /></section>

      <section id="contact"><Contact /></section>

      <section id="faqs"><Faqs /></section>
    </div>
  )
}

export default Homepage