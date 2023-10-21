<script setup>
import { ref } from 'vue';
import {getDetected} from "../assets/js/home";
import SubmitMarks from './SubmitMarks.vue';
import {toRaw} from "vue";
import {pasteImage, loadImage} from "../assets/js/imageHandling";

const props = defineProps({
    students: {
        type: Array,
        required: true
    },
    submit:{
        type:Function,
        required: true
    }
});

const file = ref(null), isActive = ref(false), image = ref("");

const detected = ref([]);

const startDetecting = async(fileBlob)=>{
    
    detected.value = await getDetected(props.students, fileBlob);
    isActive.value = true;

    loadImage(fileBlob, (url)=>image.value = url);
};

const submitFile=()=>{
    startDetecting(file.value.files[0]);

    return false;
};

const removeItem = (event, item)=>{
    const index = detected.value.indexOf(item);
    if (index !== -1) {
        detected.value.splice(index, 1);
    }
};

const submitStudents = ()=>{
    isActive.value = false;
    props.submit(toRaw(detected.value));
};

const cancel = ()=>{
    isActive.value = false;
};


document.addEventListener('paste', event=>pasteImage(event, startDetecting));

</script>

<template>
    <main>
        <form @submit="submitFile" action="#" onsubmit="return false;" class="mb-4">
            <label for="file" class="form-label">Select image with students names or paste it from buffer</label>
            <div style="display: flex; align-items: center;">
                <div class="mr-4"><input type="file" class="form-control" name="file" ref="file" accept="image/png, image/jpeg"></div>
                <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 rounded-2" value="Upload" >
            </div>
        </form>
        <div>
            <SubmitMarks :students="students" :detected="detected" :remove-item="removeItem" :image="image"
                :is-active="isActive" :submit="submitStudents" :cancel="cancel"></SubmitMarks>
        </div>
    </main>
</template>