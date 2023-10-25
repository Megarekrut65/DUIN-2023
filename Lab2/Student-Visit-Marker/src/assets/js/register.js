import {createNewUser} from "../firebase-js/auth";
import router from "../../router";
import { getErrorMessage } from "../firebase-js/error-codes/error-messages";
import {getStudents} from "./student-manager";

import {saveStudentList} from "../firebase-js/firestore";

const success = (credential)=>{
    if(credential?.user) {
        return saveStudentList(credential.user.uid, getStudents())
        .then(() => {
            router.push("/");
        })
        .catch(err=>{
            throw err;
        });
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
