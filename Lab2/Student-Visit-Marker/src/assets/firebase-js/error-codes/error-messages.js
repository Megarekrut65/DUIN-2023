import { getAuthError } from "./auth"
import { getFirestoreError } from "./firestore";

export const getErrorMessage = (code)=>{
    const auth = getAuthError(code);
    if(auth) return auth;

    const firestore = getFirestoreError(code);

    if(firestore) return firestore;

    return "Unknown error. Try agin later";
}