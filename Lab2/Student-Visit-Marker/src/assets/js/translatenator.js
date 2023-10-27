const ukrainianToEnglishMap = {
    'а': 'a', 'А': 'A',
    'б': 'b', 'Б': 'B',
    'в': 'v', 'В': 'V',
    'г': 'h', 'Г': 'H',
    'ґ': 'g', 'Ґ': 'G',
    'д': 'd', 'Д': 'D',
    'е': 'e', 'Е': 'E',
    'є': 'ie', 'Є': 'Ye',
    'ж': 'zh', 'Ж': 'Zh',
    'з': 'z', 'З': 'Z',
    'и': 'y', 'И': 'Y',
    'і': 'i', 'І': 'I',
    'ї': 'yi', 'Ї': 'Yi',
    'й': 'i', 'Й': 'Y',
    'к': 'k', 'К': 'K',
    'л': 'l', 'Л': 'L',
    'м': 'm', 'М': 'M',
    'н': 'n', 'Н': 'N',
    'о': 'o', 'О': 'O',
    'п': 'p', 'П': 'P',
    'р': 'r', 'Р': 'R',
    'с': 's', 'С': 'S',
    'т': 't', 'Т': 'T',
    'у': 'u', 'У': 'U',
    'ф': 'f', 'Ф': 'F',
    'х': 'kh', 'Х': 'Kh',
    'ц': 'ts', 'Ц': 'Ts',
    'ч': 'ch', 'Ч': 'Ch',
    'ш': 'sh', 'Ш': 'Sh',
    'щ': 'shch', 'Щ': 'Shch',
    'ь': '', 'Ь': '',
    'ю': 'iu', 'Ю': 'Yu',
    'я': 'ia', 'Я': 'Ya'
};

const convertLetter = (letter)=>{
    if(ukrainianToEnglishMap[letter]) return ukrainianToEnglishMap[letter];

    return letter;
}

/**
 * Converts ukrainian text to english one 
 * @param {String} text 
 * @returns 
 */
export const ukToEn = (text)=>{
    let res = "";

    for(let i in text){
        res += convertLetter(text[i]);
    }

    return res;
};