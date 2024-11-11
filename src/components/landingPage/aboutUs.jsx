import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'
import { text } from '../../services/fake-data/data';

function AboutUs() {

  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = text.slice(0, 500);

  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.heading}>About Us</h2>
      <p className={styles.text}>
        {isExpanded ? text : `${previewText}...`}
      </p>
      <button className={styles.toggleButton} onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  )
}

export default AboutUs