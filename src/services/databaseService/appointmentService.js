import { db } from '../../firebase'
import { addDoc, collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where } from 'firebase/firestore'


const appointmentService = {

    // add a new appointment
    async addAppointment(bookingDetails){  
        try{
            return addDoc(collection(db, 'appointments'), bookingDetails)
        } catch (e) {
            throw e;
        }
    },

    // get a booked appointment
     async getAppointment(docId){
        try {
            return getDoc(doc(db, 'appointments', docId ))
        } catch (e){
            throw e;
        }
    },

    // get all booked appointments
    async getAllAppointments(uid) {
        try {
        const appointmentRef = collection(db, 'appointments')
        const q = query(appointmentRef, where('userID', '==', uid))
        const querySnapshot = await getDocs(q)
        return querySnapshot
        } catch (e) {
            throw e;
        }
    },

    // delete an appointment
    async deleteAppointment(docId) {
        try {
            await deleteDoc(doc(db, 'appointments', docId));
            return true;
        } catch (e) {
            throw e;
        }
    }


}


export default appointmentService;

