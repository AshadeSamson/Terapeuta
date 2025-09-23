import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'


const sessionLinkService = {

    // GET VIRTUAL SESSIONS LINKS
    async getLinks(){
        try {
        const data = await getDocs(collection(db, "virtualSessionLinks"))
        const links = await data.docs.map((doc) => ({ id: doc.id, ...doc.data() }))

        return links
        } catch(e){
            throw e;
        }
    }

}

export default sessionLinkService;