import React from 'react'
import styles from '../../assets/styles/landingPage/services.module.css'


const servicesData = [
  { title: 'Web Development', description: 'Build responsive and modern websites.' },
  { title: 'App Development', description: 'Develop mobile applications for iOS and Android.' },
  { title: 'UI/UX Design', description: 'Design user-friendly and appealing interfaces.' },
];

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
