/**
 * Copies content to buffer
 * @param {String} content 
 */
export const copyToClipboard = (content) => {
    const area = document.createElement("textarea");
    document.body.appendChild(area);

    area.value = content;
    area.select();

    document.execCommand("copy");

    document.body.removeChild(area);
};