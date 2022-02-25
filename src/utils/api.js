import { initializeApp } from "firebase/app"
import { 
    collection,
    addDoc,
    getFirestore,
} from "firebase/firestore"
import {
    API_KEY,
    APP_ID,
    AUTH_DOMAIN,
    PROJECT_ID,
    SENDER_ID,
    STORAGE_BUCKET
} from "."

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: SENDER_ID,
  appId: APP_ID,
}

export const app = initializeApp(firebaseConfig)

export const database = getFirestore()

export const sendResultsToDB = async(userResults, setIsPending, setIsFinished) => {
    setIsPending(true)
    try {
        await addDoc(collection(database, "respondents"), userResults)
        setIsFinished(true)
    } catch (e) {
        console.error(e)
        alert('Произошла ошибка при отправке данных, пожалуйста повторите попытку.')
    } finally {
        setIsPending(false)
    }
}

export const sendEmailToDB = async(email, setIsPending, handleEmail) => {
    setIsPending(true)
    try {
        await addDoc(collection(database, "emails"), email)
        handleEmail()
    } catch (e) {
        console.error(e);
        alert('Произошла ошибка при отправке данных, пожалуйста повторите попытку.')
    } finally {
        setIsPending(false)
    }
}

// export const getResultsFromDB = async() => {
//     try {
//         const querySnapshot = await getDocs(collection(database, "respondents"));
//         console.log(querySnapshot)
//         querySnapshot.forEach((doc) => {
//             console.log(doc.data());
//           })
//     } catch (e) {
//         console.error(e);
//     }  
// }
