import AppLayout from "./layouts/appLayout"
import Homepage from "./pages/home"
import Login  from "./pages/logIn"
import SignUp  from "./pages/signUp"
import Profile from "./pages/profile"
import Private from "./components/private/private"
import Billing, { loader as billingsLoader } from "./components/dashboard/billing"
import Messages from "./components/messages"
import Resources from "./components/dashboard/resources"
import Settings from "./components/dashboard/settings"
import Booking ,{ action as bookingAction } from "./pages/booking"
import { RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements, 
        Route } from "react-router-dom"
import "./assets/styles/app.css"
import { useApp } from "./context/appContext"
import BookedTicket, { loader as bookedTicketLoader } from "./pages/bookedTicket"
import RouteError from "./components/error-components/Error"
import About from "./pages/about"
import Appointments, { loader as appointmentLoader } from "./components/dashboard/appointments"
import ComingSoon from "./components/utilities/comingSoon"
import TerapeutaBot from "./pages/terapeutaBot"
import Policy from "./pages/policy"
import PaymentFailure from "./pages/paymentFailure"
import PaymentSuccess from "./pages/paymentSuccess"

function App() {

  const userContext = useApp()


  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<AppLayout />} errorElement={<RouteError />}>
            <Route index element={<Homepage/>}></Route>
            <Route path="about" element={<About/>} />
            <Route path="login" element={<Login/>} />
            <Route path="signup" element={<SignUp/>} />
            <Route path="privacypolicy" element={<Policy/>} />
            <Route element={<Private />}>
              <Route path="profile" element={<Profile/>}>
                <Route index element={<Appointments />} loader={appointmentLoader(userContext)} />
                <Route path="messages" element={<Messages />} />
                <Route path="billing" element={<Billing />} loader={billingsLoader(userContext)} />
                <Route path="resources" element={<Resources />} />
                <Route path="settings" element={<Settings />} />
              </Route>
              <Route path="comingsoon" element={<ComingSoon />} />
              <Route path="cbtchat" element={<TerapeutaBot />} />
              <Route  path="booking" 
                      element={<Booking/>} 
                      action={bookingAction(userContext)}
                      errorElement={<RouteError />}/>
              <Route  path="bookings/:id"
                      element={<BookedTicket />}
                      loader={bookedTicketLoader(userContext)} 
                      errorElement={<RouteError />}/>
              <Route path="payment-successful" element={<PaymentSuccess />}/>
              <Route path="payment-cancelled" element={<PaymentFailure />}/>
            </Route>
          </Route>
    )
  )


  return(
      
        <RouterProvider router={router}/>
  )
}

export default App
