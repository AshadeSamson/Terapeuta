import React from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'
import { text } from '../../services/fake-data/data';
import Animated from '../animations/animated';
import aboutImg from '../../assets/images/about.webp';
import { Link } from 'react-router-dom';  

function AboutUs() {

  const previewText = text.slice(0, 500);
  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div className={styles.aboutContainer}>
      <Animated y={true} className={styles.aboutContainer}>
        <h2 className={styles.heading}>About Us</h2>

        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <img src={aboutImg} alt="About Us" className={styles.aboutImage} />
          </div>

          <div className={styles.text}>
            {paragraphs.length > 0 ? (
              <p className={styles.paragraph}>
                {paragraphs[0]} {paragraphs.length > 1 && '...'}
              </p>
            ) : (
              <p>{previewText}...</p>
            )}
            <Link to="about" className={styles.readMoreLink}>
              Read More
            </Link>
          </div>
        </div>
      </Animated>
    </div>
  )
}

export default AboutUs;
