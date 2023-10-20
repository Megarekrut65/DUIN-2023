import {createNewUser} from "../firebase-js/auth"

export const register = (name, email, password)=>{
    return createNewUser(name, email, password).then(()=>{
        console.log("Registered")
    })
}
