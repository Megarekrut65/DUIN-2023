import {createNewUser} from "../firebase-js/auth";
import router from "../../router";
import { getErrorMessage } from "../firebase-js/error-codes/error-messages";

const success = (user)=>{
    if(user) {
        router.push("/");
    }
};

export const register = (name, email, password)=>{
    return createNewUser(name, email, password)
    .then(success)
    .catch(err=>{
        console.log(err);
        throw getErrorMessage(err.code);
    });
};
