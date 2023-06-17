import React, { Suspense } from 'react'
import { useLoaderData } from 'react-router-dom';



export const loader = (userContext) => async () => {

  const { getAppointments, user } = userContext

  const appointments = await getAppointments(user.uid)
  const data = appointments.docs.map((doc) => doc.data())
  
  
  return data
  

}




function Appointments() {

  const data = useLoaderData()
  
  const appointments = data.sort((a,b) => new Date(b.appointmentDate)  - new Date(a.appointmentDate))
                      .map((appointment) => {
    return (<>
              <div className='session'>
                <div>
                  <h6>Date</h6>
                  <p>{appointment.appointmentDate}</p>
                </div>
                <div>
                  <h6>Time</h6>
                  <p>{appointment.time}</p>
                </div>
                <div>
                  <h6>Client</h6>
                  <p>{appointment.name}</p>
                </div>
                <div>
                  <h6>Type</h6>
                  <p>{appointment.therapyType}</p>
                </div>
              </div>
            </>)
  })

  
  
  return (
    <div className='appointments'>
      <h4>Appointments</h4>
      <Suspense fallback={<h1>Loading...</h1>}>
      {appointments.length > 0 ? React.Children.toArray(appointments) :
      <h3 className='no-booking'>No Booked Appointments as of Now.</h3>}
      </Suspense>
    </div>
  )
}

export default Appointments