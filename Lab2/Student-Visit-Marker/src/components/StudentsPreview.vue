<script setup>
import "../assets/css/custom.css";
import SimpleStudentList from "./student-list/SimpleStudentList.vue";

defineProps({
    submit: {
        type: Function,
        required: true
    },
    cancel: {
        type: Function,
        required: true
    },
    students:{
        type: Array,
        required: true
    },
    removeItem:{
        type: Function,
        required: true
    }
});


</script>

<template>
    <main>
        <div v-bind:class="students.length != 0? 'modal-container' : 'modal-container hide'" style="overflow-y: hidden;">
            <div class="modal-list">
                <div class="card">
                    <div class="card-body" style="overflow-y: auto; max-height: 90vh;">
                        <h2>Students to add:</h2>
                        <SimpleStudentList :students="students" :remove-item="removeItem" :only-marks="false" />

                        <div style="display: flex; justify-content: space-around;" class="mt-4">
                            <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Add all"
                                @click="()=>submit()">
                            <input type="button" class="btn btn-danger py-8 fs-4 mb-1 rounded-2" value="Cancel"
                                @click="cancel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>