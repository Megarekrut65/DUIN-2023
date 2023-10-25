import { getUser } from "../firebase-js/auth";
import { uploadFile, getFileURL, removeFile } from "../firebase-js/storage";
import { saveImage } from "../firebase-js/firestore";
import { extractText } from "./image-to-text";
import {compareTwoStrings} from "string-similarity";
import {toRaw} from "vue";
import {getSettings} from "./other-settings";
import { v4 as uuidv4 } from "uuid";
import { formatDateToCustomString } from "./utilities";

const getText = (file)=>{

    const user = getUser();

    const needSaveImage = getSettings()["save-image"];

    const path = user?user.uid:"public";

    return uploadFile(file, path).then(async(res)=>{
        const url = await getFileURL(res.ref);
        if(needSaveImage && user){
            saveImage(user.uid, uuidv4(), {name:file.name, url:url, date: formatDateToCustomString(new Date())});
        }

        //const text = await extractText(url);
        const text = `{"lang": "uk", "all_text": "Олександр Бандалак (Me)\\nKZ Kostiantyn Zhereb (Host)\\nYH Yaroslav Havryliuk\\nв Віктор Свинар\\nЄ Єгор Грушевий\\nКирило Рябов (phone)\\no Олексій Ткачук\\nППолосенко Павло\\nс Соколов Михайло\\nО\\nче до\\nдо\\nчто", "annotations": ["Олександр", "Бандалак", "(", "Me", ")", "KZ", "Kostiantyn", "Zhereb", "(", "Host", ")", "YH", "Yaroslav", "Havryliuk", "в", "Віктор", "Свинар", "Є", "Єгор", "Грушевий", "Кирило", "Рябов", "(", "phone", ")", "o", "Олексій", "Ткачук", "ППолосенко", "Павло", "с", "Соколов", "Михайло", "О", "че", "до", "до", "что"]}`
        
        const obj = JSON.parse(text);

        if("all_text" in obj) return obj["all_text"];

        throw new Error("There no text!");
    }).catch(err=>{
        console.log(err);
        return "";
    }).then(text=>{
        if(!needSaveImage) removeFile(file, path);

        return text;
    });
};

const getSimilarity = (name, list) =>{
    const names = name.split(" ");
    let maxSimilarity = 0, matched = "";

    for(let j in list){
        const parts = list[j].split(" ");

        let sumSimilarity = names.reduce((value, name)=>value+Math.max(...parts.map(item=>compareTwoStrings(name, item))), 0)

        const middle = sumSimilarity/names.length;

        if(middle > maxSimilarity){
            maxSimilarity = middle;
            matched = list[j];
        } 
    }

    return {similarity: maxSimilarity, matched:matched};
};

export const getDetected = async(students, file)=>{
    const detected = [];
    //const text = "Олександр Бандалак (Me)\\nKZ Kostiantyn Zhereb (Host)\\nYH Yaroslav Havryliuk\\nв Віктор Свинар\\nЄ Єгор Грушевий\\nКирило Рябов (phone)\\no Олексій Ткачук\\nППолосенко Павло\\nс Соколов Михайло\\nО\\nче до\\nдо\\nчто";
    const text = await getText(file);

    const lines = text.split("\n").filter(item=>item.trim().length > 0);

    for(let i in students){
        const result = getSimilarity(students[i].name, lines);
        if(result.similarity > 0.5) detected.push(toRaw(students[i]));
    }

    return detected;
};