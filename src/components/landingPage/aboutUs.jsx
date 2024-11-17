import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'
import { text } from '../../services/fake-data/data';
import { animated } from '@react-spring/web';
import { useAnimation } from '../../hooks/useAnimation';


function AboutUs() {

  // Animations details
  const [ref, animation] = useAnimation(
    { opacity: 0, transform: 'rotate(20deg)' },
    { opacity: 1, transform: 'rotate(0deg)' }
  );

  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = text.slice(0, 500);

  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');


  return (
    <animated.section ref={ref} style={animation} id="about">
      <div className={styles.aboutContainer}>
        <h2 className={styles.heading}>About Us</h2>
        <div className={styles.text}>
          {isExpanded
            ? paragraphs.map((paragraph, index) => (
                <p key={index} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))
            : `${previewText}...`}
        </div>
        <button className={styles.toggleButton} onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </animated.section>
  )
}

export default AboutUs