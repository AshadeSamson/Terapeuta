import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'
import { text } from '../../services/fake-data/data';
import Animated from '../animations/animated';


function AboutUs() {

  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = text.slice(0, 500);

  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');


  return (
      <div className={styles.aboutContainer}>
        <Animated y={true} className={styles.aboutContainer}>
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
        </Animated>
      </div>
  )
}

export default AboutUs