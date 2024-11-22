import React from 'react'
import { useLoaderData } from 'react-router-dom'
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

  // Sort appointments by date
  const appointments = data.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate));

  return (
    <div className={styles.appointmentsContainer}>
      <h4>Appointments</h4>
        {appointments.length > 0 ? (
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
              {appointments.map((appointment) => (
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
        ) : (
          <h3 className={styles.noBooking}>No Booked Appointments as of Now.</h3>
        )}
    </div>
  );
}

export default Appointments