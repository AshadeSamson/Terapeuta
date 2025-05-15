import React from 'react';
import { steps } from '../../services/fake-data/data';
import styles from '../../assets/styles/landingPage/howItWorks.module.css';

function HowItWorks() {

  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>Process</h2>
          <h3 className={styles.sectionTitle}>Simple Steps to Better Mental Health</h3>
        </div>

        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <div className={styles.stepNumber}>
                {step.number}
              </div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDescription}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;