import { init } from "./firebase";
import { 
    getFirestore,
    updateDoc,
    doc,
    getDoc
} from "firebase/firestore";

const fs = getFirestore(init());
const settingCollection = "settings";

/**
 * Updates marks in user settings
 * 
 * @param {String} userId 
 * @param {Object} marks 
 * @returns 
 */
export const saveMarkSettings = (userId, marks)=>{
    return updateDoc(doc(fs, settingCollection, userId), {marks:marks});
};

/**
 * Get saved user marks
 * 
 * @param {String} userId 
 * @returns 
 */
export const getMarkSettings = async(userId)=>{
    const res = await getDoc(doc(fs, settingCollection, userId));

    return res.exists()?res:null;
};