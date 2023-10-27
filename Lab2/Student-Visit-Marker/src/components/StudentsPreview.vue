<script setup>
import "../assets/css/custom.css";
import SimpleStudentList from "./student-list/SimpleStudentList.vue";
import { ref, toRaw } from "vue";

const props = defineProps({
    submit: {
        type: Function,
        required: true
    },
    cancel: {
        type: Function,
        required: true
    },
    event:{
        type: Object,
        required: true
    }
});

const students = ref([]);

const removeItem = (data) => {
    const index = students.value.indexOf(data);
    if (index != -1) {
        students.value.splice(index, 1);
    }
};

const handlePaste = (event) => {
    if(!("preventDefault" in event)) return false;

    event.preventDefault();
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text');

    const items = pastedText.split(/\n/)
        .filter(item => item.trim().length > 0)
        .map(item => item.replace(/(\r\n|\n|\r)/gm, ""));

    if (items.length < 2) {
        props.submit(items);
        return false;
    }
    
    event.target.blur();

    students.value = [];
    for (let i in items) {
        students.value.push(items[i]);
    }

    return true;
};

const submitStudents = ()=>{
    props.submit(toRaw(students.value));
};

</script>

<template>
    <main>
        <div v-bind:class="handlePaste(event)? 'modal-container' : 'modal-container hide'" style="overflow-y: hidden;">
            <div class="modal-list">
                <div class="card">
                    <div class="card-body" style="overflow-y: auto; max-height: 90vh;">
                        <h2>Students to add:</h2>
                        <SimpleStudentList :students="students" :remove-item="removeItem" :only-marks="false" />

                        <div style="display: flex; justify-content: space-around;" class="mt-4">
                            <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Add all"
                                @click="submitStudents">
                            <input type="button" class="btn btn-danger py-8 fs-4 mb-1 rounded-2" value="Cancel"
                                @click="cancel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>