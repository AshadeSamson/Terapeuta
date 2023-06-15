import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updateProfile,
        onIdTokenChanged,
        updateEmail,
        sendEmailVerification,
        updatePassword} from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { auth, db } from '../../firebase'



// creating auth context
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



    // observer for changes in user current state and profile changes
    useEffect(() => {
        const unsuscribe = onIdTokenChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsuscribe()
        }
    },[])




    // FIRESTORE AND DATABASE

    // registering a new user on sign up

    function addNewUser(id){
        return setDoc(doc(db, 'users', id),{
            userID: id
        })
    }


    // add a new booking to the user's appointment
    function addNewBooking(uid, bookingDetails){   
        return addDoc(collection(db, 'users', uid, 'appointments'), bookingDetails)
    }



    // get a newly booked appointment document
    function getNewBooking(uid, docId){
        return getDoc(doc(db, 'users', uid, 'appointments', docId ))
    }


    // get all booked appointments for a user
    function getAppointments(uid) {
        return getDocs(collection(db, 'users', uid, 'appointments'))
        
    }



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
        addNewUser,
        addNewBooking,
        getNewBooking,
        getAppointments,
    }


  return (
    <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider