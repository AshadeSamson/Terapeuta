import AppLayout from "./components/layouts/appLayout"
import Homepage from "./components/home"
import Login  from "./components/logIn"
import SignUp  from "./components/signUp"
import Profile from "./components/profile"
import Private from "./components/private/private"
import Appointments, { loader as appointmentLoader } from "./components/sub-components/appointments"
import Billing from "./components/sub-components/billing"
import Messages from "./components/sub-components/messages"
import Resources from "./components/sub-components/resources"
import Settings from "./components/sub-components/settings"
import Booking ,{ action as bookingAction } from "./components/booking"
import { RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements, 
        Route } from "react-router-dom"
import "./styles/app.css"
import { userAuth } from "./components/contexts/authContext"
import BookingTicket, { loader as bookingTicketLoader } from "./components/bookingTicket"
import RouteError from "./components/error-components/Error"




function App() {

  const userContext = userAuth()


  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<AppLayout />} errorElement={<RouteError />}>
          <Route index element={<Homepage/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route element={<Private />}>
            <Route path="profile" element={<Profile/>}>
              <Route index element={<Appointments />} loader={appointmentLoader(userContext)} />
              <Route path="messages" element={<Messages />} />
              <Route path="billing" element={<Billing />} />
              <Route path="resources" element={<Resources />} />
              <Route path="settings" element={<Settings />} />
            </Route>
            <Route  path="booking" 
                    element={<Booking/>} 
                    action={bookingAction(userContext)}
                    errorElement={<RouteError />}/>
            <Route  path="booking/:uid/:id" 
                    element={<BookingTicket />}
                    loader={bookingTicketLoader(userContext)} 
                    errorElement={<RouteError />}/>
          </Route>
          </Route>
    )
  )

  return(
      
        <RouterProvider router={router}/>
  )
}

export default App
