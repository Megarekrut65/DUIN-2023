import { removeFile } from "../firebase-js/storage";
import { extractText } from "./image-to-text";
import { getSettings } from "./other-settings";
import { addImage } from "./image-manager";
import { getSimilarity } from "./similarity";
import { ukToEn } from "./translatenator";

const getText = (file) => {
    const needSaveImage = getSettings()["save-image"];
    let path = "";

    return addImage(file, needSaveImage).then(async (result) => {
        const url = result.url;
        path = result.path;

        const text = await extractText(url);

        const obj = JSON.parse(text);

        if ("all_text" in obj) return obj["all_text"];

        const message = "message" in obj ? obj.message : "Maybe some error has occurred...";
        throw message;
    }).catch(err => {
        if (!needSaveImage) removeFile(file.name, path);

        throw err;
    }).then(text => {
        if (!needSaveImage) removeFile(file.name, path);

        return text;
    });
};

const handleSimilarity = (original, name, lines, detected)=>{
    const result = getSimilarity(name, lines);
    if (result.similarity > 0.9){
        detected.push(original);
        const index = lines.indexOf(result.matched);
        if (index !== -1) {
            lines.splice(index, 1);
        }
        return true;
    } 

    return false;
};

/**
 * Detects students in file image
 * @param {Array} students 
 * @param {File} file 
 * @returns 
 */
export const getDetected = async (students, file) => {
    const detected = [];
    const text = await getText(file);

    const minLength = Math.min(...students.map(item=>item.name.length));

    const lines = text.split("\n").filter(item => item.trim().length >= minLength/2);

    for (let i in students) {
        if(handleSimilarity(students[i].name,students[i].name, lines, detected)) continue;
        handleSimilarity(students[i].name,ukToEn(students[i].name), lines, detected);
    }

    return {detected:detected, undetected:lines};
};