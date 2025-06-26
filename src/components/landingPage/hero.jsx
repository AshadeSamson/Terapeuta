import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../assets/styles/landingPage/hero.module.css'
import heroImage from '../../assets/images/hero.bg.webp' 

function Hero({ user }) {
  return (
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Your Journey to Mental Wellness Starts Here
          </h1>
          <p className={styles.heroSubtitle}>
            Expert-led therapy tailored to your unique needs. At Terapeuta, we’re here to guide you toward healing, growth, and lasting wellness in a supportive and inclusive environment.
          </p>
          <div className={styles.heroButtons}>
            <Link to={user !== null ? 'booking' : 'signup'} className={styles.primaryButton}>
              {user !== null ? 'Book A Session' : 'Get Started Here'}
            </Link>
            <a href="#faqs" className={styles.secondaryButton}>Learn More</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img src={heroImage} alt="Therapy illustration" />
        </div>
      </div>
    </div>
  )
}

export default Hero
