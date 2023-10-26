<script setup>
import "../assets/css/custom.css";
import SimpleStudentList from "./student-list/SimpleStudentList.vue";
import {ref} from "vue";

const props = defineProps({
    students: {
        type: Array,
        required: true
    },
    detected: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    removeItem: {
        type: Function,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    },
    errorMessage: {
        type: String,
        required: true
    },
    submit: {
        type: Function,
        required: true
    },
    cancel: {
        type: Function,
        required: true
    },
    addDetected:{
        type: Function,
        required: true
    }
});

const newStudent = ref("");

const addStudent = ()=>{
    props.addDetected(newStudent.value);
    newStudent.value = "";
};

</script>

<template>
    <main>
        <div v-bind:class="isActive ? 'modal-container' : 'modal-container hide'">
            <div class="modal-list">
                <div class="card">
                    <div class="row">
                        <div v-bind:class="image !== '' ? 'col-12 col-md-6' : ''" v-if="image !== ''">
                            <div class="card-body" style="overflow-x: auto; position: relative;">
                                <h2>Your image:</h2>
                                <img v-bind:src="image" alt="image" style="height: 80vh">
                            </div>
                        </div>
                        <div v-bind:class="image !== '' ? 'col-12 col-md-6' : 'col-12'">
                            <div v-if="detected.length != 0" class="card-body">
                                <h2>Students detected:</h2>

                                <form @submit="addStudent" action="#" onsubmit="return false;">
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <select v-model="newStudent" class="form-control" required>
                                            <option disabled value="">Add students manually</option>
                                            <option v-for="(data, index) in students" :key="index">{{ data.name }}</option>
                                        </select>
                                        
                                        <input type="submit" class="btn btn-primary py-2 fs-4 rounded-2 float-right ml-2"
                                            value="Add student" />
                                    </div>
                                </form>
                                
                                <SimpleStudentList :students="detected" :remove-item="removeItem" :only-marks="false">
                                </SimpleStudentList>
                                <br>
                                <div style="display: flex; justify-content: space-around;" class="mt-4">
                                    <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Mark all"
                                        @click="submit">
                                    <input type="button" class="btn btn-danger py-8 fs-4 mb-1 rounded-2" value="Cancel"
                                        @click="cancel">
                                </div>
                            </div>
                            <div v-else class="card-body" style="text-align: center;">
                                <h2>No one has been identified from the photo!</h2>
                                <h4 class="text-danger">{{ errorMessage }}</h4>
                                <br>
                                <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Ok"
                                    @click="submit">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>