import React from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom'
import styles from '../../assets/styles/dashboard/billing.module.css'
import billingService from '../../services/databaseService/billingService'
import BillingsList from './billingsList'
import Loading from '../utilities/loading'



export const loader = (userContext) => async () => {

  const { user } = userContext

  if(user === null){
    return null;
  }

  const billingsPromise = billingService.getAllPayments(user.uid)
  
  return defer({ billings: billingsPromise});
  

}

function Billing() {

  const loaderData = useLoaderData();

  return (
    <div className={styles.billingContainer}>
      <>
      <h4>Billing History</h4>
      <React.Suspense fallback={<Loading text='Fetching payments history...'/>}>
        <Await resolve={loaderData.billings}>
          {(loadedBillings) => {

            const data = loadedBillings.docs.map((doc) => {
              const billingData = doc.data();

              return {
                id: doc.id,
                ...billingData,
                createdAt: billingData.createdAt?.toDate ? billingData.createdAt.toDate() : new Date(),
              };
            });
            
            return <BillingsList data={data} />
          }}

        </Await>
      </React.Suspense>
      </>
    </div>
  );
}

export default Billing