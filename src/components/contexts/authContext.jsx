import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged, } from 'firebase/auth'
import { auth } from '../../firebase'



// creating context
const AuthContext = createContext()


// function to serve context to child comps
export function userAuth(){
    return useContext(AuthContext)
}


function AuthContextProvider({children}) {

    function createNewUser(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // values being exported to child comps
    const value = {
        createNewUser,
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider