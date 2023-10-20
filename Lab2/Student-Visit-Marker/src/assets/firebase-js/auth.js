import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut } from "firebase/auth"
import {init} from "../firebase-js/firebase"

init()

const auth = getAuth()

const authChangeEvents = new Set()

export const subscribeAuthChange = (event)=>{
    authChangeEvents.add(event)
    event(auth.currentUser)
}
export const unsubscribeAuthChange  = (event)=>{
    authChangeEvents.delete(event)
    event(auth.currentUser)
}

const callEvents = (user)=>{
    authChangeEvents.forEach(event => {
        event(user)
    })
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid
        console.log(`${uid} - login`)
        callEvents(user)

    } else {
        callEvents(undefined)
    }
})

export const createNewUser = (name, email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        await updateProfile(userCredential.user, {
            displayName: name
        })
        console.log("updated")
    })
    .catch((error) => {
        console.log(error)
    })
}


export const logout = ()=>{
    return signOut(auth)
}