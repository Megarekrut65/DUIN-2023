/**
 * 
 * @param {string} endpoint - path to server request
 * @param {Map} request - request to send it to server
 * @returns promise to server answer data or error
 */
const sendAsync = async (endpoint, request) => {
    const response = await fetch(endpoint, request);

    if (!response.ok) {
        const text = await response.text();

        throw new Error(text);
    }
    if (response.statusText === "No Content") return response.text();
    return response.json();
};

const SERVER_URL = "https://localhost:7161/";

export const loginRequest = (username, password) =>{
    const body = {
        username: username,
        password: password
    };
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };

    return sendAsync(`${SERVER_URL}User/Login`, request);
};



export const parseError = (err) => {
    try {
        const obj = JSON.parse(err.message);
        const message = obj.error ? obj.error : JSON.stringify(obj);
        if (typeof message !== "string"){
            return message.message?message.message:JSON.stringify(message);
        } 

        return message;
    } catch (error) {
        return err;
    }
};