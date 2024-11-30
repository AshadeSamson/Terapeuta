import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updateProfile,
        onIdTokenChanged,
        updateEmail,
        sendEmailVerification,
        updatePassword,
        sendPasswordResetEmail} from 'firebase/auth';
import { addDoc, collection, doc, getDoc, getDocs, setDoc, deleteDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'



// creating auth context
const AppContext = createContext()


// function to serve context to child comps
export function useApp(){
    return useContext(AppContext)
}


function AppContextProvider({children}) {

    // state tracking authorized  user
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true);


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


    // reset user password
    function resetPassword(userEmail){
        return sendPasswordResetEmail(auth, userEmail)
    }

    // observer for changes in user current state and profile changes
    useEffect(() => {
        const unsuscribe = onIdTokenChanged(auth, (currentUser) => {
            setUser(currentUser)
            setIsLoading(false)
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


    // add a new booking to the global appointment collection
    function globalAddNewBooking(bookingDetails){   
        return addDoc(collection(db, 'appointments'), bookingDetails)
    }



    // get a newly booked appointment document
    function getNewBooking(uid, docId){
        return getDoc(doc(db, 'users', uid, 'appointments', docId ))
    }


    // delete a booked appointment document
    function deleteBooking(uid, docId){
        return deleteDoc(doc(db, 'users', uid, 'appointments', docId ))
    }


    // get all booked appointments for a user
    function getAppointments(uid) {
        return getDocs(collection(db, 'users', uid, 'appointments'))
        
    }



    // values being exported to child comps
    const value = {
        user,
        isLoading,
        currentUSER,
        createNewUser,
        loginUser,
        logoutUser,
        updateUser,
        changeEmail,
        verifyEmail,
        changePassword,
        resetPassword,
        addNewUser,
        addNewBooking,
        globalAddNewBooking,
        getNewBooking,
        deleteBooking,
        getAppointments,
    }


  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider