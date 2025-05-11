import React from 'react'
import styles from '../../assets/styles/landingPage/services.module.css'
import { servicesData } from '../../services/fake-data/data';
import { FaProjectDiagram, FaSpa, FaBullseye, FaCheck } from 'react-icons/fa';

function Services(){
  
  const services = [
    {
      icon: <FaProjectDiagram />,
      title: "Cognitive Behavioral Therapy",
      description: "Identify and change negative thought patterns and behaviors that may be causing difficulties in your life.",
      benefits: [
        "Manage anxiety and depression",
        "Develop coping strategies",
        "Improve emotional regulation"
      ]
    },
    {
      icon: <FaSpa />,
      title: "Mindfulness-Based Therapy",
      description: "Cultivate present-moment awareness to reduce stress, enhance focus, and improve overall well-being.",
      benefits: [
        "Reduce stress and burnout",
        "Enhance emotional resilience",
        "Improve sleep quality"
      ]
    },
    {
      icon: <FaBullseye />,
      title: "Career & Life Coaching",
      description: "Gain clarity on your goals, overcome obstacles, and create actionable plans for personal and professional success.",
      benefits: [
        "Career transitions",
        "Work-life balance",
        "Personal development"
      ]
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>Services</h2>
          <h3 className={styles.sectionTitle}>Personalized Therapeutic Approaches</h3>
          <p className={styles.sectionDescription}>
            We offer evidence-based therapies to help you overcome challenges and achieve personal growth.
          </p>
        </div>

        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {service.icon}
              </div>
              <h4 className={styles.serviceTitle}>{service.title}
              </h4>
              <p className={styles.serviceDescription}>{service.description}
              </p>
              <ul className={styles.serviceBenefits}>
                {service.benefits.map((benefit, i) => (
                  <li key={i} className={styles.benefitItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
