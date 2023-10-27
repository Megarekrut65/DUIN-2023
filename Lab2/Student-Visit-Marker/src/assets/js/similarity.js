import { compareTwoStrings } from "string-similarity";

const compareTexts = (text1, text2)=>{
    if(text1.indexOf("і") != -1) text2 = text2.replaceAll("i", "і");

    return compareTwoStrings(text1, text2);
};

export const getSimilarity = (name, list) => {
    const names = name.split(/[\s\t\n]+/).filter(item => item.trim().length > 2);
    let maxSimilarity = 0, matched = "";

    for (let j in list) {
        const parts = list[j].split(/[\s\t\n]+/).filter(item => item.trim().length > 2);

        let sumSimilarity = names.reduce((value, name) => value + Math.max(...parts.map(item => compareTexts(name, item))), 0)
        const middle = sumSimilarity / names.length;

        if (middle > maxSimilarity) {
            maxSimilarity = middle;
            matched = list[j];
            if (maxSimilarity > 0.9) break;
        }
    }

    return { similarity: maxSimilarity, matched: matched };
};
