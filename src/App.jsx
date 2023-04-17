import AppLayout from "./components/layouts/appLayout"
import Homepage from "./components/home"
import Login  from "./components/logIn"
import SignUp  from "./components/signUp"
import Profile from "./components/profile"
import Private from "./components/private/private"
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
            <Route path="profile" element={<Profile/>} />
          </Route>
          </Route>
    )
  )

  return(
      
        <RouterProvider router={router}/>
  )
}

export default App
