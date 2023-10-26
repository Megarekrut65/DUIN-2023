import { loadWithUser } from "../firebase-js/auth";
import { getSavedImages, saveImage, changeImages } from "../firebase-js/firestore";
import { v4 as uuidv4 } from "uuid";
import { uploadFile, getFileURL, removeFile } from "../firebase-js/storage";
import { formatDateToCustomString } from "./utilities";

export const getImages = ()=>{
    const item = localStorage.getItem("images");
    if(item == null) return {};
    const list = JSON.parse(item);
    if(list == null) return {};
    
    return list;
};

export const removeImage = (id)=>{
    const images = getImages();
    const name =  images[id].name;
    delete images[id];

    localStorage.setItem("images", JSON.stringify(images));

    return new Promise((resolve, reject)=>{
        loadWithUser((user)=>{
            const path = user?user.uid:"public";

            if(user){
                removeFile(name, path).then(()=>{
                    changeImages(user.uid, images).then(resolve).catch(reject);
                }).catch((err)=>{
                    if(err.code === "storage/object-not-found") changeImages(user.uid, images).then(resolve).catch(reject);
                    else reject(err);
                });
            }
        });
    });
};

export const addImage = (file, needSave)=>{
    return new Promise((resolve, reject)=>{
        loadWithUser((user)=>{
            const path = user?user.uid:"public";

            uploadFile(file, path).then(async(res)=>{
                const url = await getFileURL(res.ref);
                const resolver = ()=>resolve({url:url, path:path});
                
                if(user && needSave){         
                    const image = {name:file.name, url:url, date: formatDateToCustomString(new Date())};

                    const id = uuidv4();
                    const images = getImages();
                    images[id] = image;
                    localStorage.setItem("images", JSON.stringify(images));

                    saveImage(user.uid, id, image).then(resolver).catch(resolver);
                }
                resolver();

            }).catch(reject);
        });
    });
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