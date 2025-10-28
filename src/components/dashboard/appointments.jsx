import React from 'react'
import { useLoaderData, defer, Await } from 'react-router-dom'
import styles from '../../assets/styles/dashboard/appointments.module.css'
import appointmentService from '../../services/databaseService/appointmentService'
import AppointmentsTable from './appointmentsTable'
import Loading from '../utilities/loading'



export const loader = (userContext) => async () => {

  const { user } = userContext

  if(user === null){
    return null;
  }

  const appointmentsPromise = appointmentService.getAllAppointments(user.uid)
  
  return defer({ appointments: appointmentsPromise});
  

}

function Appointments() {

  const loaderData = useLoaderData();

  return (
    <div className={styles.appointmentsContainer}>
      <>
      <h4>Appointments</h4>
      <React.Suspense fallback={<Loading text='Fetching your appointments...'/>}>
        <Await resolve={loaderData.appointments}>
          {(loadedAppointments) => {
            const data = loadedAppointments.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            
            return <AppointmentsTable data={data} />
          }}

        </Await>
      </React.Suspense>
      </>
    </div>
  );
}

export default Appointments