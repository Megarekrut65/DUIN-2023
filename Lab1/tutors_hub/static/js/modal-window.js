const window_ = document.getElementById("modal-window");
const submitBtn = document.getElementById("modal-submit");
const questionText = document.getElementById("modal-question");

const openModal = (question, formId)=>{
    questionText.textContent = question;

    submitBtn.onclick = ()=>{
        document.getElementById(formId).submit();
    }

    window_.classList.remove("hide")
};

const closeModal = ()=>{
    questionText.textContent = "";

    window_.classList.add("hide");
}