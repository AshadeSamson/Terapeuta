import { useState }from 'react'
import Pagination from '../utilities/pagination'
import styles from '../../assets/styles/dashboard/appointments.module.css'

function BillingsList({ data }) {
  const [billings, setBillings] = useState(
    data.sort((a, b) => new Date(b.createdAt.toLocaleDateString()) - new Date(a.createdAt.toLocaleDateString()))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const billingsPerPage = 5;

  const indexOfLastBilling = currentPage * billingsPerPage;
  const indexOfFirstBilling = indexOfLastBilling - billingsPerPage;
  const currentBillings = billings.slice(indexOfFirstBilling, indexOfLastBilling);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  if(billings <= 0){
    return (
        <h3 className={styles.noBooking}>No Payments History Found.</h3>
    )
  }

  return (
    <>
          {currentBillings.map((billingRecord) => (
            <div key={billingRecord.id} className={styles.billingRecord}>
              <div>
                <p><strong>Amount:</strong> ${billingRecord.amount.toFixed(2)}</p>
                <p><strong>Date:</strong> {new Date(billingRecord.createdAt).toLocaleDateString()}</p>
                <p><strong>Status:</strong> {billingRecord.status}</p>
                <p><strong>Transaction ID:</strong> {billingRecord.paymentId}</p>
              </div>
            </div>
          ))}

      <Pagination
        itemsPerPage={billingsPerPage}
        totalItems={billings.length}
        paginate={paginate}
      />
    </>
  );
}


export default BillingsList