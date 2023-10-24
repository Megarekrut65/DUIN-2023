import {loadWithUser} from "../firebase-js/auth";
import {saveMarkSettings} from "../firebase-js/firestore";

const convert_ = [
    {count: 0, mark:"Absent", color:"tomato"},
    {count: 1, mark:"Present", color:"green"}
];


const loadConvert = ()=>{
    
    const item = localStorage.getItem("convert");
    if(item == null) return convert_;
    const list = JSON.parse(item);
    if(list == null || list.length < 2) return convert_;
    
    return list;
};

let convert = loadConvert();

export const getMark = (count)=>{
    for(let i = 0; i < convert.length; i++){
        if(count <= convert[i].count){
            return convert[i].mark;
        }
    }

    return convert[convert.length - 1].mark;
};


export const getColor = (count)=>{
    for(let i = 0; i < convert.length; i++){
        if(count <= convert[i].count){
            return convert[i].color;
        }
    }

    return convert[convert.length - 1].color;
};

export const defaultConvert = ()=> convert;

export const changeConvert = async(newConvert)=>{
    convert = newConvert;
    localStorage.setItem("convert", JSON.stringify(convert));

    loadWithUser((user)=>{
        if(user){
            saveMarkSettings(user.uid, newConvert);
        }
    });
};