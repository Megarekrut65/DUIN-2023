import { removeFile } from "../firebase-js/storage";
import { extractText } from "./image-to-text";
import { compareTwoStrings } from "string-similarity";
import { getSettings } from "./other-settings";
import { addImage } from "./image-manager";

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

const getSimilarity = (name, list) => {
    const names = name.split(/[\s\t\n]+/).filter(item => item.trim().length > 2);
    let maxSimilarity = 0, matched = "";

    for (let j in list) {
        const parts = list[j].split(/[\s\t\n]+/).filter(item => item.trim().length > 2);

        let sumSimilarity = names.reduce((value, name) => value + Math.max(...parts.map(item => compareTwoStrings(name, item))), 0)
        const middle = sumSimilarity / names.length;

        if (middle > maxSimilarity) {
            maxSimilarity = middle;
            matched = list[j];
            if (maxSimilarity > 0.9) break;
        }
    }

    return { similarity: maxSimilarity, matched: matched };
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

    const lines = text.split("\n").filter(item => item.trim().length > 3);

    for (let i in students) {
        const result = getSimilarity(students[i].name, lines);
        if (result.similarity > 0.9) detected.push(students[i].name);
    }

    return detected;
};