import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useApp } from '../../context/appContext'
import Pagination from '../utilities/pagination'
import { toast } from 'react-toastify'
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
  const { user, deleteBooking, getAppointments } = useApp()

  // Sort appointments by date
  const [appointments, setAppointments] = useState(data.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate)));

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [appointmentsPerPage] = useState(5);

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  // refresh data
  async function fetchAppointments() {
    try {
      const result = await getAppointments(user.uid);
      const updatedAppointments = result.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setAppointments(
        updatedAppointments.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate))
      );
    } catch (e) {
      toast.error(`Failed to fetch appointments`);
    }
  }


  // Appointment Delete handler
  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete this appointment?");
    if(confirmDelete){
    try {
      await deleteBooking(user.uid, id)
      toast.success("Appointment deleted successfully");
      fetchAppointments();
    } catch (e) {
      toast.warning(`Appointment not deleted: ${e.message}`);
    }
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