import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env.React_App_API_KEY,
    authDomain: process.env.React_App_AUTH_DOMAIN,
    projectId: process.env.React_App_PROJECT_ID,
    storageBucket: process.env.React_App_STORAGE_BUCKET,
    messagingSenderId: process.env.React_App_MESSAGING_SENDER_ID,
    appId: process.env.React_App_APP_ID,
})




export const auth = app.auth();
export default app;