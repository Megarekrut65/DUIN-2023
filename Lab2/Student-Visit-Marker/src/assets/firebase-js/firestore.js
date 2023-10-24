import { init } from "./firebase";
import { 
    getFirestore,
    setDoc,
    doc,
    getDoc
} from "firebase/firestore";

const fs = getFirestore(init());
const settingCollection = "settings", userCollection = "users";

/**
 * Updates marks in user settings
 * 
 * @param {String} userId 
 * @param {Object} marks 
 * @returns 
 */
export const saveMarkSettings = (userId, marks)=>{
    return setDoc(doc(fs, settingCollection, userId), {marks:marks}, {merge:true});
};

/**
 * Get saved user marks
 * 
 * @param {String} userId 
 * @returns 
 */
export const getMarkSettings = async(userId)=>{
    const res = await getDoc(doc(fs, settingCollection, userId));

    return res.exists()?res.data()["marks"]:null;
};

/**
 * Updates student list
 * 
 * @param {String} userId 
 * @param {Array} list 
 * @returns 
 */
export const saveStudentList = (userId, list)=>{
    return setDoc(doc(fs, userCollection, userId), {list:list}, {merge:true});
};

/**
 * Get student list
 * 
 * @param {String} userId 
 * @returns 
 */
export const getStudentList = async(userId)=>{
    const res = await getDoc(doc(fs, userCollection, userId));

    return res.exists()?res.data()["list"]:null;
};