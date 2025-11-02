import { useState }from 'react'
import Pagination from '../utilities/pagination'
import { toast } from 'react-toastify'
import styles from '../../assets/styles/dashboard/appointments.module.css'
import { IconContext } from 'react-icons'
import { FaDeleteLeft } from 'react-icons/fa6'
import appointmentService from '../../services/databaseService/appointmentService'
import { Link } from 'react-router-dom'

function AppointmentsTable({ data }) {
  const [appointments, setAppointments] = useState(
    data.sort((a, b) => new Date(b.appointmentDate) - new Date(a.appointmentDate))
  );
  const [currentPage, setCurrentPage] = useState(1);
  const appointmentsPerPage = 5;

  const indexOfLastAppointment = currentPage * appointmentsPerPage;
  const indexOfFirstAppointment = indexOfLastAppointment - appointmentsPerPage;
  const currentAppointments = appointments.slice(indexOfFirstAppointment, indexOfLastAppointment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  async function handleDelete(id) {
    const confirmDelete = window.confirm("Are you sure you want to cancel this appointment?");
    if (confirmDelete) {
      try {
        await appointmentService.deleteAppointment(id);
        toast.success("Appointment deleted successfully");
        setAppointments((prev) => prev.filter((app) => app.id !== id));
      } catch (e) {
        toast.warning(`Appointment not deleted: ${e.message}`);
      }
    }
  }

  if(appointments <= 0){
    return (
        <h3 className={styles.noBooking}>No Booked Appointments as of Now</h3>
    )
  }

  return (
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
              <td>
                <Link
                  className={styles.appointmentLinks}
                  to={`/bookings/${appointment.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {appointment.appointmentDate}
                </Link>
              </td>
              <td>
                <Link
                  className={styles.appointmentLinks}
                  to={`/bookings/${appointment.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {appointment.time}
                </Link>
              </td>
              <td>
                <Link
                  className={styles.appointmentLinks}
                  to={`/bookings/${appointment.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {appointment.name}
                </Link>
              </td>
              <td>
                <Link
                  className={styles.appointmentLinks}
                  to={`/bookings/${appointment.id}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {appointment.therapyType}
                </Link>
              </td>
              <td>
                <IconContext.Provider value={{ size: "2rem" }}>
                  <a onClick={() => handleDelete(appointment.id)}>
                    <FaDeleteLeft className={styles.deleteButton} />
                  </a>
                </IconContext.Provider>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        itemsPerPage={appointmentsPerPage}
        totalItems={appointments.length}
        paginate={paginate}
      />
    </>
  );
}


export default AppointmentsTable