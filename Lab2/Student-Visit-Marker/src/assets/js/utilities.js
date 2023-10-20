export const decodeUnicodeEscape = (input)=>{
    return input.replace(/\\u[0-9a-fA-F]{4}/g, match => {
        return String.fromCharCode(parseInt(match.slice(2), 16));
    });
};