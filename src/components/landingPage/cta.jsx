import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/landingPage/cta.module.css'
import ctaImg from '../../assets/images/cta.webp'
import Animated from '../animations/animated'

function CTA({user}) {
  return (
    <div className={styles.ctaContainer}>
    <div className={styles.ctaImage}>
      <Animated className={styles.ctaImage}>
        <img src={ctaImg} alt="Call to Action" />
      </Animated>
    </div>
    <div className={styles.ctaText}>
      <Animated y={true} className={styles.ctaText}>
        <h1 className={styles.ctaHeading}>Unlock Your Potential, Design Your Future</h1>
        <div className={styles.ctaParagraph}>
          <p>
          Take the first step towards a fulfilling career and a balanced life. Our personalized coaching sessions empower you to overcome challenges, set clear goals, and achieve meaningful growth.
          </p>
        </div>
        <div><Link to={user !== null ? 'booking' : 'signup'}><button className={styles.ctaButton}>{ user !== null ? 'Book An Interaction ' : 'Transform Your Career!'}</button></Link></div>
      </Animated>
    </div>
  </div>
  )
}

export default CTA