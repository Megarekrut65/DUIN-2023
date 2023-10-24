import {loginGoogle, loginUserEmail} from "../firebase-js/auth";
import router from "../../router";
import {getMarkSettings} from "../firebase-js/firestore";

const success = (credential)=>{
    if(credential?.user) {
        getMarkSettings(credential.user.uid).then(res=>{
            if(res){
                localStorage.setItem("convert", JSON.stringify(res));
            }
        }).then(()=>{
            router.push("/");
        })
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