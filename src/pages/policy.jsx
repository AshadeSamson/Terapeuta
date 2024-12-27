import React from 'react'
import styles from '../assets/styles/policy.module.css'
import Animated from '../components/animations/animated'
import privacyImg from '../assets/images/privacy.webp'

function Policy() {
  return (
    <section className='policy'>
        <div className={styles.policy}>
        <Animated y={true} className={styles.policy}>
            <div className={styles.policyContentWrapper}>
                <div className={styles.image}>
                    <img src={privacyImg} alt="About Us" className={styles.policyImage} />
                </div>
                <div className={styles.headline}>
                    <h2>Privacy Policy</h2>
                </div>
            </div>
        </Animated>
        </div>
        <div className='section-body'>
        </div>
    </section>
  )
}

export default Policy