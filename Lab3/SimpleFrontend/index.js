import { createTextRequest, editTextRequest, textRequest, textsListRequest } from "./requests.js";
import { getToken, parseError } from "./utilities.js";

const template = document.getElementById("text-row");
const place = document.getElementById("text-place");
const verify = document.getElementById("verify");


const createTextRow = (data, append=true)=>{
    const row = template.content.cloneNode(true);

    row.querySelector("#text-id").textContent = data.id ?? "";
    row.querySelector("#text-title").textContent = data.title ?? "";
    row.querySelector("#text-created").textContent = data.created ?? "";
    row.querySelector("#text-private").textContent = data.privateContent ?? "";

    row.querySelector("#edit").addEventListener("click", ()=>changeState("edit", data.id));
    row.querySelector("#remove").addEventListener("click", ()=>changeState("remove", data.id));

    if(append) place.appendChild(row);
    else place.insertBefore(row, place.firstChild);
};

const textFrom = document.getElementById("text-form");
const addBtn = document.getElementById("add-btn");
const error = document.getElementById("error-box");

const handleError = (err)=>{
    error.textContent = parseError(err);
}

let state = "add";

const loadForm = (data)=>{
    textFrom.querySelector('#id').value = data.id ?? "";
    textFrom.querySelector('#title').value = data.title ?? "";
    textFrom.querySelector('#privateContent').checked = data.privateContent ?? "";
    textFrom.querySelector('#content').value = data.content ?? "";
};

const changeState = (newState, id)=>{
    state = newState;

    error.textContent = "";
    if (newState === "add"){
        verify.classList.add("hide");
        loadForm({});
        return;
    }

    if (newState === "edit"){
        textRequest(id).then(loadForm).catch(handleError);
        verify.classList.remove("hide");
    }
};

const submitTextForm = ()=>{
    const id = textFrom.querySelector('#id').value;

    const formData = {
        title: textFrom.querySelector('#title').value,
        privateContent: textFrom.querySelector('#privateContent').checked,
        content: textFrom.querySelector('#content').value
    };

    if(state === "add"){
        createTextRequest(formData).then(res=>{
            textRequest(res.id).then(res=>createTextRow(res, false)).catch(handleError);
            changeState("add");
        }).catch(handleError);
        return false;
    }

    if(state === "edit"){
        editTextRequest(id, formData).then(res=>{
            window.location.reload();
        }).catch(handleError);
        return false;
    }
    
    
    return false;
}

window.addEventListener("load", ()=>{
    const token = getToken();
    if(!token || token === ""){
        place.textContent = "Empty list";
        return;
    }

    textFrom.addEventListener("submit", submitTextForm);

    textsListRequest().then(res=>{
        for(let text of res){
            createTextRow(text);
        }
    });

    addBtn.addEventListener("click", ()=>changeState("add"));
});