import React, { useState } from 'react';
import styles from '../assets/styles/resetPassword.module.css';

function ResetPasswordModal({ isOpen, onClose }) {
  
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Reset Password Data:', { email });

    onClose();
  };

  if (!isOpen) return null; 

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.heading}>Reset Password</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <div>
            <button type="submit" className={styles.submitButton}>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordModal;
