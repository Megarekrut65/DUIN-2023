<script setup>
import { ref, toRaw } from 'vue';
import { getDetected } from "../assets/js/home";
import SubmitMarks from './SubmitMarks.vue';
import { pasteImage, loadImage, renameFile } from "../assets/js/image-handling";
import LoadingWindow from './LoadingWindow.vue';

const props = defineProps({
    students: {
        type: Array,
        required: true
    },
    submit: {
        type: Function,
        required: true
    }
});

const file = ref(null), isActive = ref(false), image = ref(""), isLoading = ref(false);

const detected = ref([]), undetected = ref([]);
const errorMessage = ref("");

const addDetected = (name)=>{
    detected.value.push(name);
};

const startDetecting = async (fileBlob) => {
    image.value = "";
    detected.value = [];

    if (props.students.length == 0) {
        errorMessage.value = "First provide students in students list!";
        isActive.value = true;
        isLoading.value = false;
        return;
    }
    try {
        const result = await getDetected(props.students, fileBlob);
        detected.value = result.detected;
        undetected.value = result.undetected;

        loadImage(fileBlob, (url) => image.value = url);
    }
    catch (err) {
        console.log(err);
        errorMessage.value = err;
    }
    isActive.value = true;
    isLoading.value = false;
};

const submitFile = () => {
    isLoading.value = true;
    startDetecting(renameFile(file.value.files[0]));

    return false;
};

const removeItem = (item) => {
    const index = detected.value.indexOf(item);
    if (index !== -1) {
        detected.value.splice(index, 1);
    }
};

const submitStudents = () => {
    isActive.value = false;
    props.submit(toRaw(detected.value));
};

const cancel = () => {
    isActive.value = false;
};


document.addEventListener('paste', event => {
    if (!isLoading.value && !isActive.value) {
        isLoading.value = true;
        pasteImage(event, (fileBlob) => {
            if (fileBlob) {
                startDetecting(fileBlob);
                return;
            }
            isLoading.value = false;
        });
    }
});

</script>

<template>
    <main>
        <form @submit="submitFile" action="#" onsubmit="return false;" class="mb-4">
            <label for="file" class="form-label">Select image with students names or paste it from buffer</label>
            <div style="display: flex; align-items: center;">
                <div class="mr-4"><input type="file" class="form-control" name="file" ref="file"
                        accept="image/png, image/jpeg" required></div>
                <input type="submit" class="btn btn-primary py-2 fs-4 mb-1 rounded-2" value="Upload">
            </div>
        </form>
        <div>
            <SubmitMarks :students="students" :detected="detected" :undetected="undetected" :remove-item="removeItem" :image="image"
                :is-active="isActive" :submit="submitStudents" :cancel="cancel" :error-message="errorMessage" 
                :add-detected="addDetected" />
        </div>
        <LoadingWindow :is-active="isLoading"></LoadingWindow>
</main></template>