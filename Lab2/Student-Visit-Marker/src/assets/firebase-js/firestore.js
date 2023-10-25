import { init } from "./firebase";
import { 
    getFirestore,
    setDoc,
    doc,
    getDoc
} from "firebase/firestore";

const fs = getFirestore(init());
const settingCollection = "settings", userCollection = "users", saveCollection = "saves";

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
export const getMarkSettings = (userId)=>{
    return getDoc(doc(fs, settingCollection, userId))
    .then(res=>res.exists()?res.data()["marks"]:null);
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
export const getStudentList = (userId)=>{
    return getDoc(doc(fs, userCollection, userId))
    .then(res=>res.exists()?res.data()["list"]:null);
};

/**
 * Updates other settings
 * 
 * @param {String} userId 
 * @param {Object} otherSettings 
 * @returns 
 */
export const saveOtherSettings = (userId, otherSettings)=>{
    return setDoc(doc(fs, settingCollection, userId), {otherSettings:otherSettings}, {merge:true});
};

/**
 * Get other settings
 * 
 * @param {String} userId 
 * @returns 
 */
export const getOtherSettings = (userId)=>{
    return getDoc(doc(fs, settingCollection, userId))
    .then(res=>res.exists()?res.data()["otherSettings"]:null);
};

/**
 * Updates saved images
 * 
 * @param {String} userId 
 * @param {Object} image 
 * @returns 
 */
export const saveImage = (userId, id, image)=>{
    return setDoc(doc(fs, saveCollection, userId), {[id]:image}, {merge:true});
};

/**
 * Get saved images
 * 
 * @param {String} userId 
 * @returns 
 */
export const getSavedImages = (userId)=>{
    return getDoc(doc(fs, saveCollection, userId))
    .then(res=>res.exists()?res.data():null);
};

/**
 * Updates saved images
 * 
 * @param {String} userId 
 * @param {Object} image 
 * @returns 
 */
export const changeImages = (userId, images)=>{
    return setDoc(doc(fs, saveCollection, userId), images);
};