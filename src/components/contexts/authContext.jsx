import { createContext, useContext, useEffect, useState } from "react";
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

    // state tracking authorized  user
    const [user, setUser] = useState(null)


    // create new user
    function createNewUser(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log out user
    function logoutUser(email, password){
        return signOut(auth)
    }

    // log in user
    function loginUser(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }



    useEffect(() => {
        const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsuscribe()
        }
    },[])


    // values being exported to child comps
    const value = {
        createNewUser,
        user,
        loginUser,
        logoutUser,
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider