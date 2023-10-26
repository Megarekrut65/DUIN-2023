import { getAuthError } from "./auth"
import { getFirestoreError } from "./firestore";
import {getStorageError} from "./storage";

export const getErrorMessage = (code)=>{
    const auth = getAuthError(code);
    if(auth) return auth;

    const firestore = getFirestoreError(code);

    if(firestore) return firestore;

    const storage = getStorageError(code);
    if(storage) return storage;

    return "Unknown error. Try agin later";
}