import React from 'react'
import styles from '../../assets/styles/landingPage/hero.module.css'
import heroImg from '../../assets/images/terapeuta.gif'

function Hero({ user }) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.heroHeading}>Empower Your Mind, Embrace Your Journey</h1>
        <div className={styles.heroParagraph}>
          <p>
          Discover compassionate, expert-led therapy tailored to your unique needs. At Terapeuta, we’re here to guide you toward healing, growth, and lasting wellness in a supportive and inclusive environment.
          </p>
        </div>
        <div><button className={styles.heroButton}>{ user !== null ? 'Book A Session' : 'Get Started Here'}</button></div>
      </div>
      <div className={styles.heroImage}>
        <img src={heroImg} alt="Hero Background" />
      </div>
    </div>
  )
}

export default Hero