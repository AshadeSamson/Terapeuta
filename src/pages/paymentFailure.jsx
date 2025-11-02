import React from "react";
import styles from "../assets/styles/paymentFailure.module.css";
import { Link } from "react-router-dom";

const PaymentFailure = () => {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <span className={styles.cross}>✕</span>
        </div>
        <h1 className={styles.title}>Payment Failed</h1>
        <p className={styles.message}>
          Something went wrong with your payment and appointment was not booked. Please try again.
        </p>
        <Link to="/booking" className={styles.button}>
          Try Again
        </Link>
      </div>
    </section>
  );
};

export default PaymentFailure;
