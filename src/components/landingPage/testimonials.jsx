import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/testimonials.module.css'
import { testimonialsData } from '../../services/fake-data/data';
import Animated from '../animations/animated';


function Testimonials(){
  
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextSlide() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
      <Animated y={true} className={styles.testimonialsSection}>
      <h2 className={styles.heading}>What Our Clients Say</h2>
      <div className={styles.slider}>
        <div
          className={styles.testimonialCard}
          key={currentIndex}
        >
          <p className={styles.quote}>“{testimonialsData[currentIndex].quote}”</p>
          <p className={styles.author}>{testimonialsData[currentIndex].name}</p>
          <p className={styles.role}>{testimonialsData[currentIndex].role}</p>
        </div>
        <div className={styles.navigation}>
          <button className={styles.navButton} onClick={prevSlide}>
            ❮
          </button>
          <button className={styles.navButton} onClick={nextSlide}>
            ❯
          </button>
        </div>
      </div>
      </Animated>
    </section>
  );
};

export default Testimonials;
