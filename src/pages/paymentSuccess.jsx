import React from "react";
import styles from "../assets/styles/paymentSuccess.module.css";
import { Link } from "react-router-dom";



function PaymentSuccess() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <span className={styles.checkmark}>✓</span>
        </div>
        <h1 className={styles.title}>Payment Successful</h1>
        <p className={styles.message}>
          Your appointment has been booked successfully. Check your dashboard to view your appointmemnts and billing details.
        </p>
        <Link to="/profile" className={styles.button}>
          Go to Dashboard
        </Link>
      </div>
    </section>
  );
};

export default PaymentSuccess;
