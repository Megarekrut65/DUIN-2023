import { getAuth, 
    createUserWithEmailAndPassword, 
    onAuthStateChanged, 
    updateProfile, 
    signOut,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import {init} from "../firebase-js/firebase";

init();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
//googleProvider.addScope("https://www.googleapis.com/auth/spreadsheets");

const authChangeEvents = new Set();

/**
 * Subscribe event to user change state events
 * 
 * @param {function} event - function to call it when user change state
 */
export const subscribeAuthChange = (event)=>{
    authChangeEvents.add(event);
    event(auth.currentUser);
};

/**
 * Unsubscribe event to user change state events
 * 
 * @param {function} event - function to call it when user change state
 */
export const unsubscribeAuthChange  = (event)=>{
    authChangeEvents.delete(event);
    event(auth.currentUser);
};

/**
 * Call all function that subscribed to user auth change evens
 * @param {*} user 
 */
const callEvents = (user)=>{
    authChangeEvents.forEach(event => {
        event(user);
    });
};

/**
 * Creates new user in database
 * 
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 * @returns promise to answer
 */
export const createNewUser = (name, email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
    .then(async(userCredential) => {
        await updateProfile(userCredential.user, {
            displayName: name
        });

        callEvents(userCredential.user);
    })
    .catch((error) => {
        console.log(error);
    });
};

/**
 * Login user
 * 
 * @param {String} email 
 * @param {String} password 
 */
export const loginUserEmail = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password);
};

export const loginGoogle = ()=>{
    return signInWithPopup(auth, googleProvider);
};

/**
 * Logout user
 * 
 * @returns promise to answer
 */
export const logout = ()=>{
    const cookies = document.cookie.split(";");
    
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i];
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }    
    localStorage.clear();

    return signOut(auth);
};

export const getUser = ()=> auth.currentUser;

onAuthStateChanged(auth, (user) => {
    if (user) {
        callEvents(user);

    } else {
        callEvents(undefined);
    }
});

export const ifAuthenticated = (to, from, next) => {
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        if(user){
            next();
            unsubscribe();
            return;
        }
        next({ name: "unauthorized"});
        unsubscribe();
    });
};

export const loadWithUser = (load)=>{
    const unsubscribe = onAuthStateChanged(auth, (user)=>{
        load(user);
        unsubscribe();
    });
}