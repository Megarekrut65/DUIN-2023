import { createTextRequest, editTextRequest, removeTextRequest, textRequest, textsListRequest, verifyTextRequest } from "./requests.js";
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
    row.querySelector("#remove").addEventListener("click", ()=>{
        removeTextRequest(data.id).then(res=>{
            window.location.reload();
        }).catch(handleError);
    });

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
    error.textContent = "";

    const id = textFrom.querySelector('#id').value;

    const formData = {
        title: textFrom.querySelector('#title').value,
        privateContent: textFrom.querySelector('#privateContent').checked,
        content: textFrom.querySelector('#content').value
    };

    if(state === "add"){
        createTextRequest(formData).then(res=>{
            textRequest(res.id).then(res=>createTextRow(res, false)).catch(handleError);
            changeState("edit", res.id);
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
};

const verifyContainer = document.getElementById("verify-modal");
const verifyBtn = document.getElementById("ok-btn");
const verifyTemplate = document.getElementById("match-row");
const matchList = document.getElementById("match-list");

const loadVerify = (data)=>{
    matchList.innerHTML = "";

    for(let item of data.bestMatchedSentences){
        const row = verifyTemplate.content.cloneNode(true);

        row.querySelector('#target').textContent = item.targetText;
        row.querySelector('#found').textContent = item.foundText;
        row.querySelector('#similarity').textContent = item.localSimilarity;

        matchList.appendChild(row);
    }

    verifyContainer.querySelector('#unique').textContent = data.uniquePercent;
    verifyContainer.querySelector('#date').textContent = data.verifyDate;
};

const verifyText = ()=>{
    if(state !== "edit") return;
    const id = textFrom.querySelector('#id').value;

    verifyTextRequest(id).then(data=>{
        verifyContainer.style.display = "flex";
        loadVerify(data);

    }).catch(handleError);
};

const verifyClose = ()=>{
    verifyContainer.style.display = "none";
};

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

    verify.addEventListener("click", verifyText);

    verifyBtn.addEventListener("click", verifyClose);
});