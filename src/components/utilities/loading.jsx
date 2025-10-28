import React from 'react';
import styles from '../../assets/styles/loading.module.css';

function Loading({ text = "Loading..." }) {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>{text}</p>
    </div>
  );
}

export default Loading;
