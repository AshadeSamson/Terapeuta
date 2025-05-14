import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/testimonials.module.css'
import { testimonialsData } from '../../services/fake-data/data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


function Testimonials(){
  
  const testimonials = [
    {
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "Emma",
      service: "Anxiety Management",
      quote: "\"After just 8 weeks of CBT with Terapeuta, my anxiety levels have decreased significantly. The convenience of virtual sessions meant I could stick with therapy even during busy work weeks.\"",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
      name: "James",
      service: "Career Coaching",
      quote: "\"The career coaching helped me transition into a new industry with confidence. The AI chatbot was surprisingly helpful for practicing interview questions between sessions.\"",
      rating: 5
    },
    {
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      name: "Priya",
      service: "Mindfulness Training",
      quote: "\"The mindfulness techniques I learned have completely changed how I handle stress. Being able to access guided exercises through the app anytime has been a game-changer.\"",
      rating: 4.5
    }
  ];

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>Testimonials</h2>
          <h3 className={styles.sectionTitle}>Stories of Transformation</h3>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className={styles.testimonialImage}
                />
                <div>
                  <h4 className={styles.testimonialName}>{testimonial.name}</h4>
                  <p className={styles.testimonialService}>{testimonial.service}</p>
                </div>
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
              </div>
              <div className={styles.testimonialRating}>
                {[...Array(5)].map((_, i) => {
                  if (i < Math.floor(testimonial.rating)) {
                    return <FaStar key={i} className={styles.starIcon} />;
                  } else if (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0) {
                    return <FaStarHalfAlt key={i} className={styles.starIcon} />;
                  } else {
                    return <FaStar key={i} className={styles.starIconEmpty} />;
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
