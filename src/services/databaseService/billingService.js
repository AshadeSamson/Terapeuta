import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'


const billingService = {

    // get all payment records
    async getAllPayments(uid) {
        try {
        const paymentRef = collection(db, 'billings')
        const q = query(paymentRef, where('userId', '==', uid))
        const querySnapshot = await getDocs(q)
        return querySnapshot
        } catch (e) {
            throw e;
        }
    },
}


export default billingService;