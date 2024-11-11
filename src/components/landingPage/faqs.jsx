import React, { useState } from 'react'
import styles from '../../assets/styles/landingPage/faqs.module.css'

function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Terapeuta?",
      answer: "Terapeuta is a web application designed to connect clients with qualified therapists, providing professional therapy services to support mental health and wellness goals."
    },
    {
      question: "How can I book a session?",
      answer: "You can book a session by creating an account, logging in, and selecting a therapist of your choice. From there, you can choose an available time slot and confirm your booking."
    },
    {
      question: "Is my information secure?",
      answer: "Yes, your data is securely stored using Firebase, ensuring confidentiality and compliance with data protection standards."
    },
    {
      question: "What types of therapy do you offer?",
      answer: "We offer a variety of therapeutic approaches including Cognitive Behavioral Therapy (CBT), solution-focused therapy, and mindfulness-based therapy."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
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
    </div>
  )
}

export default Faqs