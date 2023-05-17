import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        updateProfile,
        reload,
        onIdTokenChanged,
        updateEmail,
        sendEmailVerification,
        updatePassword} from 'firebase/auth'
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


    // update user email
    function changeEmail(currentUser, newEmail){
        return updateEmail(currentUser, newEmail)
    }


    // verify user email
    function verifyEmail(currentUser){
        return sendEmailVerification(currentUser)
    }


    // update user password
    function changePassword(currentUser, newPassword){
        return updatePassword(currentUser, newPassword)
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
        currentUSER,
        createNewUser,
        loginUser,
        logoutUser,
        updateUser,
        changeEmail,
        verifyEmail,
        changePassword,
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider