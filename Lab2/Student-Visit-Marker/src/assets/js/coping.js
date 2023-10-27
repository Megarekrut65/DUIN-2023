/**
 * Copies content to buffer
 * @param {String} content 
 */
export const copyToClipboard = (content) => {
    const dataHTML = content.map(item => `
    <tr>
    ${"name" in item?"<td>"+item.name+"</td>":""}<td style="color: ${item.color}">${item.mark}</td>
    </tr>
    `).join(' ');


    const table = document.createElement('table');
    table.style = "font-family:arial; color: black; font-size:14px;";
    table.innerHTML = dataHTML;

    document.body.appendChild(table);

    const range = document.createRange();
    range.selectNodeContents(table);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand('copy');

    document.body.removeChild(table);
};