import {loginGoogle, loginUserEmail} from "../firebase-js/auth";
import router from "../../router";
import {getMarkSettings, getStudentList} from "../firebase-js/firestore";

const success = (credential)=>{
    if(credential?.user) {
        getMarkSettings(credential.user.uid).then(marks=>{
            if(marks){
                localStorage.setItem("convert", JSON.stringify(marks));
            }
            getStudentList(credential.user.uid).then(students=>{
                if(students){
                    localStorage.setItem("students", JSON.stringify(students));
                }
                router.push("/");
            });
        });
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