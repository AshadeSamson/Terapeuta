import React from 'react';
import styles from '../../assets/styles/landingPage/howItWorks.module.css';

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Initial Assessment",
      description: "Complete our brief online assessment to help us understand your needs and match you with the right therapist."
    },
    {
      number: "2",
      title: "Match & Schedule",
      description: "We'll introduce you to your therapist and help schedule your first session at a convenient time."
    },
    {
      number: "3",
      title: "Begin Your Journey",
      description: "Attend virtual sessions and access our AI support tools between sessions to reinforce your progress."
    }
  ];

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