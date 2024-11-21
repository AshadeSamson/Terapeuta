import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/faqs.module.css'
import { faqs } from '../../services/fake-data/data';
import Animated from '../animations/animated';

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      <Animated y={true}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <div 
                className={styles.question} 
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
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
      </Animated>
    </div>
  )
}

export default Faqs