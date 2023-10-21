<script setup>
import { ref } from 'vue';
import {getDetected} from "../assets/js/home";
import SubmitMarks from './SubmitMarks.vue';
import {toRaw} from "vue";
import {pasteImage} from "../assets/js/imageHandling";

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

const file = ref(null), isActive = ref(false);

const detected = ref([]);

const startDetecting = async(fileBlob)=>{
    detected.value = await getDetected(props.students, fileBlob);
    isActive.value = true;
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
            <label for="file" class="form-label">Image with students names</label>
            <div class="left-form">
                <div><input type="file" class="form-control" name="file" ref="file" accept="image/png, image/jpeg"></div>
                <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 rounded-2" value="Upload" >
            </div>
        </form>
        <div>
            <SubmitMarks :students="students" :detected="detected" :remove-item="removeItem" 
                :is-active="isActive" :submit="submitStudents" :cancel="cancel"></SubmitMarks>
        </div>
    </main>
</template>