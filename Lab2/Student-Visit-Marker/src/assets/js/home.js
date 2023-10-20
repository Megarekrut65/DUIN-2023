import { getUser } from "../firebase-js/auth";
import { uploadFile, getFileURL } from "../firebase-js/storage";
//import { extractText } from "./image-to-text";

export const getText = (file)=>{

    console.log(file)
    const user = getUser();

    const path = user?user.uid:"public";


    return new Promise((resolve)=>{
        const text = `{"lang": "uk", "all_text": "Олександр Бандалак (Me)\nKZ Kostiantyn Zhereb (Host)\nYH Yaroslav Havryliuk\nв Віктор Свинар\nЄ Єгор Грушевий\nКирило Рябов (phone)\no Олексій Ткачук\nППолосенко Павло\nс Соколов Михайло\nО\nче до\nдо\nчто", "annotations": ["Олександр", "Бандалак", "(", "Me", ")", "KZ", "Kostiantyn", "Zhereb", "(", "Host", ")", "YH", "Yaroslav", "Havryliuk", "в", "Віктор", "Свинар", "Є", "Єгор", "Грушевий", "Кирило", "Рябов", "(", "phone", ")", "o", "Олексій", "Ткачук", "ППолосенко", "Павло", "с", "Соколов", "Михайло", "О", "че", "до", "до", "что"]}`
        
        resolve(text)
    });

    /*return uploadFile(file, path).then(async(res)=>{
        const url = await getFileURL(res.ref)

        //extractText(url)

        const text = `{"lang": "uk", "all_text": "Олександр Бандалак (Me)\nKZ Kostiantyn Zhereb (Host)\nYH Yaroslav Havryliuk\nв Віктор Свинар\nЄ Єгор Грушевий\nКирило Рябов (phone)\no Олексій Ткачук\nППолосенко Павло\nс Соколов Михайло\nО\nче до\nдо\nчто", "annotations": ["Олександр", "Бандалак", "(", "Me", ")", "KZ", "Kostiantyn", "Zhereb", "(", "Host", ")", "YH", "Yaroslav", "Havryliuk", "в", "Віктор", "Свинар", "Є", "Єгор", "Грушевий", "Кирило", "Рябов", "(", "phone", ")", "o", "Олексій", "Ткачук", "ППолосенко", "Павло", "с", "Соколов", "Михайло", "О", "че", "до", "до", "что"]}`
        
        return res;
    }).catch(err=>console.log(err));*/
};