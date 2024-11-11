import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/testimonials.module.css'


const testimonialsData = [
  {
    quote: "This platform has changed my life. The therapists are so understanding and helpful!",
    name: "Sarah W.",
    role: "Client",
  },
  {
    quote: "The booking process is so easy, and I feel supported throughout my sessions.",
    name: "James P.",
    role: "Client",
  },
  {
    quote: "I love the professional approach and the care I receive here.",
    name: "Emily R.",
    role: "Client",
  },
];

function Testimonials(){
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.testimonialsSection}>
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
    </section>
  );
};

export default Testimonials;
