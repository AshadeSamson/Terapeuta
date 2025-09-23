import { db } from '../../firebase'
import { addDoc, collection, doc, getDoc, getDocs, setDoc, deleteDoc, query, where } from 'firebase/firestore'


const appointmentService = {

    // add a new booking to the user's appointment
    addNewBooking(bookingDetails){   
        return addDoc(collection(db, 'appointments'), bookingDetails)
    },

    // get all booked appointments for a user
    async getAppointments(uid) {
        try {
        const appointmentRef = collection(db, 'appointments')
        const q = query(appointmentRef, where('userID', '==', uid))
        const querySnapshot = await getDocs(q)
        return querySnapshot
        } catch (e) {
            throw e
        }
    },

    // delete a booked appointment document
    async deleteBooking(docId) {
        try {
            await deleteDoc(doc(db, 'appointments', docId));
            return true;
        } catch (e) {
            throw e;
        }
    }


}


export default appointmentService;

