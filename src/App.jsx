import AppLayout from "./layouts/appLayout"
import Homepage from "./pages/home"
import Login  from "./pages/logIn"
import SignUp  from "./pages/signUp"
import Profile from "./pages/profile"
import Private from "./components/private/private"
import Billing from "./components/billing"
import Messages from "./components/messages"
import Resources from "./components/dashboard/resources"
import Settings from "./components/settings"
import Booking ,{ action as bookingAction } from "./pages/booking"
import { RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements, 
        Route } from "react-router-dom"
import "./assets/styles/app.css"
import { useApp } from "./context/appContext"
import BookingTicket, { loader as bookingTicketLoader } from "./components/bookingTicket"
import RouteError from "./components/error-components/Error"
import About from "./pages/about"
import Appointments, { loader as appointmentLoader } from "./components/dashboard/appointments"
import ComingSoon from "./components/utilities/comingSoon"
import Chatbot from "./components/chatbots/chatbot"




function App() {

  const userContext = useApp()


  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<AppLayout />} errorElement={<RouteError />}>
            <Route index element={<Homepage/>}></Route>
            <Route path="about" element={<About/>} />
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
              <Route path="comingsoon" element={<ComingSoon />} />
              <Route path="chatai" element={<Chatbot />} />
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
