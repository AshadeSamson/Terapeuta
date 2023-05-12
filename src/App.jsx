import AppLayout from "./components/layouts/appLayout"
import Homepage from "./components/home"
import Login  from "./components/logIn"
import SignUp  from "./components/signUp"
import Profile from "./components/profile"
import Private from "./components/private/private"
import Appointments from "./components/sub-components/appointments"
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




function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
          <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage/>} />
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<SignUp/>} />
          <Route element={<Private />}>
            <Route path="profile" element={<Profile/>}>
              <Route index element={<Appointments />} />
              <Route path="messages" element={<Messages />} />
              <Route path="billing" element={<Billing />} />
              <Route path="resources" element={<Resources />} />
              <Route path="settings" element={<Settings />} >
                <Route path="setname" element={<h1>change name</h1>}/>
                <Route path="setmail" element={<h1>Change Email</h1>}/>
                <Route path="verifymail" element={<h1>Verify Email</h1>}/>
                <Route path="setpassword" element={<h1>change Password</h1>}/>
              </Route>
            </Route>
            <Route path="booking" element={<Booking/>} action={bookingAction}/>
          </Route>
          </Route>
    )
  )

  return(
      
        <RouterProvider router={router}/>
  )
}

export default App
