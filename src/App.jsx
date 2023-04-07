import AppLayout from "./components/layouts/appLayout"
import Homepage from "./components/home"
import Login , { action as loginAction} from "./components/logIn"
import SignUp , { action as signUpAction} from "./components/signUp"
import Profile from "./components/profile"
import { RouterProvider, 
        createBrowserRouter, 
        createRoutesFromElements, 
        Route } from "react-router-dom"
import "./styles/app.css"


function App() {

  console.log(app)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage/>} />
          <Route path="login" element={<Login/>} action={loginAction}/>
          <Route path="signup" element={<SignUp/>} action={signUpAction}/>
          <Route path="profile" element={<Profile/>} />
      </Route>
    )
  )

  return(
    <RouterProvider router={router}/>
  )
}

export default App
