import React from 'react'
import { useLoaderData } from 'react-router-dom';



export const loader = (userContext) => async () => {

  const { getAppointments, user } = userContext

  const appointments = await getAppointments(user.uid)
  const data = appointments.docs.map((doc) => doc.data())
  
  
  return data
  

}




function Appointments() {

  const data = useLoaderData()
  console.log(data)
  
  
  
  return (
    <h1>Appointments</h1>
  )
}

export default Appointments