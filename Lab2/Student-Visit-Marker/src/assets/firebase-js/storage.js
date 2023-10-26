import { getStorage, ref, uploadBytes, deleteObject, getDownloadURL } from "firebase/storage";
import { init } from "../firebase-js/firebase";

const storage = getStorage(init());

/**
 * Uploads file to database
 * 
 * @param {File} file 
 * @param {String} direction 
 * @returns 
 */
export const uploadFile = (file, direction) => {
    const fileRef = ref(storage, `temp/${direction}/${file.name}`);

    return uploadBytes(fileRef, file);

};

/**
 * Removes file from database
 * @param {String} path 
 * @returns 
 */
export const removeFile = (filename, direction) => {
    const fileRef = ref(storage, `temp/${direction}/${filename}`);

    return deleteObject(fileRef);
};

/**
 * Returns url to file by ref
 * 
 * @param {*} imgRef 
 * @returns 
 */
export const getFileURL = async (imgRef) => {
    try {
        const url = await getDownloadURL(imgRef);
        return url;
    } catch (err) {
        console.log(err);
    }
    return "";
};