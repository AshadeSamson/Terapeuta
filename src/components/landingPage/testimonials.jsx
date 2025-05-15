import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/testimonials.module.css'
import { testimonialsData } from '../../services/fake-data/data';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';


function Testimonials(){

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>Testimonials</h2>
          <h3 className={styles.sectionTitle}>Stories of Transformation</h3>
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial, index) => (
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
