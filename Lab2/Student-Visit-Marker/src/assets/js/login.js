import {loginGoogle, loginUserEmail} from "../firebase-js/auth";
import router from "../../router";

const success = (user)=>{
    if(user) {
        router.push("/");
    }
};

export const login = (email, password)=>{
    return loginUserEmail(email, password)
    .then(success)
    .catch(err=>console.log(err));
};

export const loginWithGoogle = ()=>{
    return loginGoogle()
    .then(success)
    .catch(err=>console.log(err));
};