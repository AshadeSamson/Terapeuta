import React from 'react'
import styles from '../../assets/styles/landingPage/aboutUs.module.css'
import { text } from '../../services/fake-data/data';
import Animated from '../animations/animated';
import aboutImg from '../../assets/images/about.webp';
import { Link } from 'react-router-dom';  


function AboutUs({ aboutPage }) {

  const previewText = text.slice(0, 500);
  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');

  return (
    <div className={aboutPage ? styles.aboutUs : styles.aboutContainer}>
      <Animated y={true} className={aboutPage ? styles.aboutUs : styles.aboutContainer}>
        { !aboutPage && <h2 className={styles.heading}>About Us</h2>}


        <div className={styles.contentWrapper}>
          <div className={styles.image}>
            <img src={aboutImg} alt="About Us" className={styles.aboutImage} />
          </div>


          { aboutPage &&           
          <div className={styles.headline}>
              <h2>About Us</h2>
          </div>}


          { !aboutPage &&
          <div className={styles.text}>
            {paragraphs.length > 0 ? (
              <p className={styles.paragraph}>
                {paragraphs[0]} {paragraphs.length > 1 && '...'}
              </p>
            ) : (
              <p>{previewText}...</p>
            )}
            <Link to="about">
              <button className={`button ${styles.readMoreLink}`}>Learn More</button>
            </Link>
          </div>}

        </div>
      </Animated>
    </div>
  )
}

export default AboutUs;
