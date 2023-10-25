import { loadWithUser } from "../firebase-js/auth";
import { getOtherSettings, saveOtherSettings } from "../firebase-js/firestore";

export const getSettings = ()=>{
    const item = localStorage.getItem("other-settings");
    if(item == null) return {};
    const list = JSON.parse(item);
    if(list == null) return {};
    
    return list;
};

export const saveSettings = (otherSettings)=>{
    localStorage.setItem("other-settings", JSON.stringify(otherSettings));

    return new Promise((resolve, reject)=>{
        loadWithUser((user)=>{
            if(user){
                saveOtherSettings(user.uid, otherSettings)
                .then(resolve).catch(reject);
            }
        });
    });
};

loadWithUser((user)=>{
    if(user){
        getOtherSettings(user.uid).then(res=>{
            if(res){
                localStorage.setItem("other-settings", JSON.stringify(res));
            }
        });
    }
});