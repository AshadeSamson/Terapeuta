import React from 'react';
import styles from '../../assets/styles/landingPage/chatFeature.module.css';
import { FaRobot } from 'react-icons/fa';

function ChatbotFeature() {
    
  return (
    <section className={styles.chatbotFeature}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>AI-Powered Support Between Sessions</h2>
          <p className={styles.description}>
            Our intelligent chatbot provides 24/7 support, helping you practice techniques and track progress between therapy sessions.
          </p>
          <div className={styles.buttonContainer}>
            <a href="#signup" className={styles.button}>Try the Chatbot</a>
          </div>
        </div>
        <div className={styles.chatbotDemo}>
          <div className={styles.chatbotWindow}>
            <div className={styles.chatbotHeader}>
              <div className={styles.chatbotInfo}>
                <div className={styles.chatbotIcon}>
                  <FaRobot />
                </div>
                <div>
                  <h3 className={styles.chatbotName}>Terapeuta AI Therapist</h3>
                  <p className={styles.chatbotStatus}>Online now</p>
                </div>
              </div>
            </div>
            <div className={styles.chatbotMessages}>
              <div className={styles.messageBot}>
                <div className={styles.messageContent}>
                  Hi there! I'm here to help you practice CBT techniques or mindfulness exercises. What would you like to work on today?
                </div>
              </div>
              <div className={styles.messageUser}>
                <div className={styles.messageContent}>
                  I'm feeling anxious about work. Can you guide me through a quick exercise?
                </div>
              </div>
              <div className={styles.messageBot}>
                <div className={styles.messageContent}>
                  Of course! Let's try a 3-minute grounding exercise. First, notice 5 things you can see around you...
                </div>
              </div>
            </div>
            <div className={styles.chatbotInput}>
              <input type="text" placeholder="Type your message..." className={styles.inputField} />
              <button className={styles.sendButton}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotFeature;