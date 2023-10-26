import { v4 as uuidv4 } from "uuid";

export const pasteImage = (event, success) => {
    const items = (event.clipboardData || event.originalEvent.clipboardData).items;

    for (let i = 0; i < items.length; i++) {
        if (items[i].type.indexOf('image') !== -1) {
            const file = items[i].getAsFile();
            success(renameFile(file));
            return;
        }
    }

    success(null);
};

export const renameFile = (file)=>{
    const blob = file.slice(0, file.size, 'image/png'); 
    const result = new File([blob], uuidv4(), {type: 'image/png'});

    return result;
}

export const loadImage = (file, success)=>{
    const reader = new FileReader();

    reader.onload = (event)=> {
        const imageUrl = event.target.result;

        success(imageUrl);
    };

    reader.readAsDataURL(file);
};