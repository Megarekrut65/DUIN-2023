import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import {init} from "../firebase-js/firebase"

init()

const auth = getAuth()

export const register = (name, email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential)
    })
    .catch((error) => {
        console.log(error)
    })
}
