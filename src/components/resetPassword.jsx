import React, { useState } from 'react';
import styles from '../assets/styles/resetPassword.module.css';
import { useApp } from '../context/appContext';
import errorRegex from '../utils/regex';
import { toast } from 'react-toastify';

function ResetPasswordModal({ isOpen, onClose }) {
  
  const [email, setEmail] = useState('');

  const [error, setError] = useState(() => null)

  const [action, setAction] = useState(false)

  const { resetPassword } = useApp()



  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      setAction(true)
      await resetPassword(email);
      toast.success("Check Mail Inbox for Instructions");
      onClose();
    }catch(e){
      setError(errorRegex(e.message))
      toast.warning("Error Resetting Password");

      setTimeout(() => {
        setError(null);
        setEmail(''); 
      }, 3000);
    }finally{
      setAction(false)
    }
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
          {error && <h5 className='error red'>{error}</h5>}
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
            required
          />
          <div>
            <button disabled={action === true} type="submit" className={styles.submitButton}>
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResetPasswordModal;
