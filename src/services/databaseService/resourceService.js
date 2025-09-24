import { db } from '../../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const resourceService = {

    // get all resources
    async getResources(category) {
        try {
            const resourcesRef = collection(db, "resources");
            const q = await query(resourcesRef, where("category", "==", category));
            const querySnapshot = await getDocs(q);
            return querySnapshot;
        } catch (e) {
            throw e;
        }
    },

}

export default resourceService;