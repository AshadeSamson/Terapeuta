import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Pagination from '../utilities/pagination'
import styles from '../../assets/styles/dashboard/appointments.module.css'
import { IconContext } from 'react-icons'
import { FaDeleteLeft } from 'react-icons/fa6'



export const loader = (userContext) => async () => {

  const { getAppointments, user } = userContext

  if(user === null){
    return null;
  }

  const appointments = await getAppointments(user.uid)
  const data = appointments.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  
  return data
  

}

function Appointments() {

  const data = useLoaderData();

  // Sort appointments by date
  const appointments = data.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // Delete handler
  const handleDelete = async (id) => {
    try {
      // Logic to delete the appointment
      console.log(`Deleting appointment with ID: ${id}`);
      // Optionally refresh or update state here
    } catch (error) {
      console.error('Error deleting appointment:', error);
    }
  };



  return (
    <div className={styles.appointmentsContainer}>
      <h4>Appointments</h4>
        {appointments.length > 0 ? (
          <>
          <table className={styles.appointmentsTable}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Client</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {currentAppointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.appointmentDate}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.name}</td>
                  <td>{appointment.therapyType}</td>
                  <td>
                  <IconContext.Provider value={{size: "2rem"}}>
                  <a onClick={() => handleDelete(appointment.id)}><FaDeleteLeft className={styles.deleteButton}/></a>
                  </IconContext.Provider>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            appointmentsPerPage={appointmentsPerPage}
            totalAppointments={appointments.length}
            paginate={paginate}
          />
          </>
        ) : (
          <h3 className={styles.noBooking}>No Booked Appointments as of Now.</h3>
        )}
    </div>
  );
}

export default Appointments