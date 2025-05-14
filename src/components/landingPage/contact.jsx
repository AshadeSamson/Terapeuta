import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from '../../assets/styles/landingPage/contact.module.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      function handleChange(e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      return (
        <section id="signup" className={styles.signup}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h2 className={styles.title}>Ready to Start Your Journey?</h2>
              <p className={styles.description}>
                Take the first step toward better mental health today. Our team is here to support you every step of the way.
              </p>
              <div className={styles.buttonContainer}>
                <Link to="signup" className={styles.contactbutton}>Sign Up Now</Link>
              </div>
            </div>
            <div className={styles.formContainer} id='consultation'>
              <div className={styles.formWrapper}>
                <h3 className={styles.formTitle}>Book Free Consultation</h3>
                <form className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.formLabel}>Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className={styles.formInput}
                      placeholder="Your name"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.formLabel}>Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className={styles.formInput}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="service" className={styles.formLabel}>I'm interested in</label>
                    <select id="service" className={styles.formInput}>
                      <option>Cognitive Behavioral Therapy</option>
                      <option>Mindfulness-Based Therapy</option>
                      <option>Career & Life Coaching</option>
                      <option>Not sure - I'd like guidance</option>
                    </select>
                  </div>
                  <button type="submit" className={styles.submitButton}>
                    Message Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
}

export default Contact