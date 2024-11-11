import React from 'react'
import styles from '../../assets/styles/landingPage/services.module.css'
import { servicesData } from '../../services/fake-data/data';

function Services(){
  
  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.servicesContainer}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
};

export default Services;
