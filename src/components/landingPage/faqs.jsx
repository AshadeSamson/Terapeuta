import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/faqs.module.css'
import { faqs } from '../../services/fake-data/data';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  function toggleFAQ(index) {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <div className={styles.contentWrapper}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionSubtitle}>FAQs</h2>
          <h3 className={styles.sectionTitle}>Frequently Asked Questions</h3>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
              >
                <p>{faq.question}</p>
                <span className={styles.icon}>
                  {activeIndex === index ? '-' : '+'}
                </span>
              </div>
              {activeIndex === index && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faqs
