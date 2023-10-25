import {loginGoogle, loginUserEmail} from "../firebase-js/auth";
import router from "../../router";
import {getMarkSettings, getStudentList} from "../firebase-js/firestore";
import { getErrorMessage } from "../firebase-js/error-codes/error-messages";

const success = (credential)=>{
    if(credential?.user) {
        const promiseMarks = getMarkSettings(credential.user.uid);
        const promiseStudents = getStudentList(credential.user.uid);

        return Promise.all([promiseMarks, promiseStudents])
        .then((values) => {
            if(values[0]){
                localStorage.setItem("convert", JSON.stringify(values[0]));
            }
            if(values[1]){
                localStorage.setItem("students", JSON.stringify(values[1]));
            }
            router.push("/");
        })
        .catch(err=>{
            throw err;
        });
    }
};

const error = (err)=>{
    console.log(err);
    throw getErrorMessage(err.code);
};

export const login = (email, password)=>{
    return loginUserEmail(email, password)
    .then(success)
    .catch(error);
};

export const loginWithGoogle = ()=>{
    return loginGoogle()
    .then(success)
    .catch(error);
};