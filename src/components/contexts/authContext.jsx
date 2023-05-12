import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        updateProfile,
        reload,
        onIdTokenChanged} from 'firebase/auth'
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


    // current logged in user
    const currentUSER = auth.currentUser


    // create new user
    function createNewUser(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log out user
    function logoutUser(){
        return signOut(auth)
    }

    // log in user
    function loginUser(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }


    // update user profile
    function updateUser(profile, userName){
        return updateProfile(profile, { displayName: userName})
    }



    useEffect(() => {
        const unsuscribe = onIdTokenChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsuscribe()
        }
    },[])



    // values being exported to child comps
    const value = {
        user,
        createNewUser,
        loginUser,
        logoutUser,
        updateUser,
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider