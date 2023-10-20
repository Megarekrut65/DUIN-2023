import {createNewUser} from "../firebase-js/auth";
import router from "../../router";

const success = (user)=>{
    if(user) {
        router.push("/");
    }
};

export const register = (name, email, password)=>{
    return createNewUser(name, email, password)
    .then(success)
    .catch(err=>console.log(err));
};
