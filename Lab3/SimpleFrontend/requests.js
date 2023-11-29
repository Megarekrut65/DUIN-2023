import { getToken } from "./utilities.js";

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

    return sendAsync(`${SERVER_URL}user/login`, request);
};

export const registerRequest = (username, email, password) =>{
    const body = {
        username: username,
        email : email,
        password: password
    };
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    };

    return sendAsync(`${SERVER_URL}user/register`, request);
};


export const textsListRequest = () =>{
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    };

    return sendAsync(`${SERVER_URL}text/headeronly`, request);
};


export const textRequest = (id) =>{
    const request = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        }
    };

    return sendAsync(`${SERVER_URL}text/${id}`, request);
};

export const createTextRequest = (body) =>{
    const request = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(body)
    };

    return sendAsync(`${SERVER_URL}text`, request);
};

export const editTextRequest = (id, body) =>{
    const request = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify(body)
    };

    return sendAsync(`${SERVER_URL}text/${id}`, request);
};