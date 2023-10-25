import { loadWithUser } from "../firebase-js/auth";
import { getSavedImages, saveImage, changeImages } from "../firebase-js/firestore";

export const getImages = ()=>{
    const item = localStorage.getItem("images");
    if(item == null) return {};
    const list = JSON.parse(item);
    if(list == null) return {};
    
    return list;
};


loadWithUser((user)=>{
    if(user){
        getSavedImages(user.uid).then(res=>{
            if(res){
                localStorage.setItem("images", JSON.stringify(res));
            }
        });
    }
});