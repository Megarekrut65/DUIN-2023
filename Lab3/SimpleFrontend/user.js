import {loginRequest,  registerRequest} from "./requests.js"
import {parseError,getToken, getUsername, setUserData} from "./utilities.js";

const loginLink = document.getElementById("login-link");
const registerLink = document.getElementById("register-link");

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const usernameBox = document.getElementById("username-box");
const logoutNode = document.getElementById("logout");

const registerBtn = ()=>{
    loginForm.classList.add("hide");
    registerForm.classList.remove("hide");
};
const loginBtn = ()=>{
    registerForm.classList.add("hide");
    loginForm.classList.remove("hide");
};
const logout = ()=>{
    localStorage.clear();
    window.location.reload();
};

const submitLogin = ()=>{
    const username = loginForm.querySelector("#username").value;
    const password = loginForm.querySelector("#password").value;

    loginRequest(username, password).then((res) => {
        setUserData({username:username, token:res.token});
        window.location.reload();
    }).catch((err) => {
        loginForm.querySelector("#error").textContent = parseError(err);
    });

    return false;
};


const submitRegister = ()=>{
    const username = registerForm.querySelector("#username").value;
    const email = registerForm.querySelector("#email").value;
    const password = registerForm.querySelector("#password").value;

    registerRequest(username, email, password).then((res) => {
        setUserData({username:username, token:res.token});
        window.location.reload();
    }).catch((err) => {
        registerForm.querySelector("#error").textContent = parseError(err);
    });

    return false;
};

window.addEventListener("load", ()=>{
    loginLink.addEventListener("click", loginBtn);
    registerLink.addEventListener("click", registerBtn);

    loginForm.addEventListener("submit", submitLogin);
    registerForm.addEventListener("submit", submitRegister);

    const token = getToken();
    if(!token || token === ""){
        loginForm.classList.remove("hide");

        return;
    }
    
    usernameBox.classList.remove("hide");

    usernameBox.querySelector("#username").textContent = getUsername();

    logoutNode.addEventListener("click", logout);
});