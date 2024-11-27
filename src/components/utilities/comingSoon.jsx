import React from "react";
import styles from "../../assets/styles/comingSoon.module.css";

function ComingSoon() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Your AI Therapist</h1>
        <h1 className={styles.title}>Coming Soon!</h1>
        <p className={styles.subtitle}>
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className={styles.timer}>
          <div className={styles.timerSegment}>
            <span className={styles.number}>10</span>
            <span className={styles.label}>Days</span>
          </div>
          <div className={styles.timerSegment}>
            <span className={styles.number}>12</span>
            <span className={styles.label}>Hours</span>
          </div>
          <div className={styles.timerSegment}>
            <span className={styles.number}>35</span>
            <span className={styles.label}>Minutes</span>
          </div>
          <div className={styles.timerSegment}>
            <span className={styles.number}>45</span>
            <span className={styles.label}>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
