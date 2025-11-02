import { useState, useMemo } from 'react';
import Pagination from '../utilities/pagination';
import styles from '../../assets/styles/dashboard/billing.module.css';

function BillingsList({ data }) {

  const sortedBillings = useMemo(() => {
    return [...data].sort((a, b) => {
      const dateA = a.createdAt?.seconds
        ? new Date(a.createdAt.seconds * 1000) 
        : new Date(a.createdAt);
      const dateB = b.createdAt?.seconds
        ? new Date(b.createdAt.seconds * 1000)
        : new Date(b.createdAt);
      return dateB - dateA; 
    });
  }, [data]);

  const [currentPage, setCurrentPage] = useState(1);
  const billingsPerPage = 5;

  const indexOfLastBilling = currentPage * billingsPerPage;
  const indexOfFirstBilling = indexOfLastBilling - billingsPerPage;
  const currentBillings = sortedBillings.slice(indexOfFirstBilling, indexOfLastBilling);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (!sortedBillings.length) {
    return <h3 className={styles.noBooking}>No Payments History Found.</h3>;
  }

  return (
    <>
      <div className={styles.transactionList}>
        {currentBillings.map((billing) => {
          const isSuccess =
            billing.paymentStatus === 'success' || billing.paymentStatus === 'completed';

          // ✅ Handle Firestore timestamp or string
          const billingDate = billing.createdAt?.seconds
            ? new Date(billing.createdAt.seconds * 1000)
            : new Date(billing.createdAt);

          const formattedDate = billingDate.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
          });

          return (
            <div key={billing.id} className={styles.transactionRow}>
              <div className={styles.leftSection}>
                <span
                  className={`${styles.statusDot} ${
                    isSuccess ? styles.successDot : styles.failedDot
                  }`}
                >
                  {isSuccess ? '↑' : '↓'}
                </span>
                <div className={styles.textInfo}>
                  <p className={styles.date}>{formattedDate}</p>
                  <p className={styles.meta}>Appointment ID: {billing.appointmentId}</p>
                  <p className={styles.meta}>Pay ID: {billing.paymentId}</p>
                </div>
              </div>

              <div className={styles.rightSection}>
                <p className={styles.amount}>${(billing.amount / 100).toFixed(2)}</p>
                <p
                  className={`${styles.statusText} ${
                    isSuccess ? styles.successText : styles.failedText
                  }`}
                >
                  {isSuccess ? 'Successful' : 'Failed'}
                </p>
              </div>
            </div>
          );
        })}

        <Pagination
          itemsPerPage={billingsPerPage}
          totalItems={sortedBillings.length}
          paginate={paginate}
        />
      </div>
    </>
  );
}

export default BillingsList;
