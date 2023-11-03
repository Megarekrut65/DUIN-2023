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
    undetected: {
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

const newStudent = ref(""), error=ref("");

const addStudent = ()=>{
    error.value = "";

    const options = props.students.filter(item => !props.detected.includes(item.name)).map(item=>item.name);
    if(options.includes(newStudent.value)){
        props.addDetected(newStudent.value);
        newStudent.value = "";
        return false;
    }

    error.value = "Select item from list!";
    return false;
};

</script>

<template>
    <main>
        <div v-bind:class="isActive ? 'modal-container' : 'modal-container hide'" style="overflow-y: hidden;">
            <div class="modal-list">
                <div class="card">
                    <div class="row" style="overflow-y: auto; max-height: 90vh;">
                        <div v-bind:class="image !== '' ? 'col-12 col-xl-4' : ''" v-if="image !== ''">
                            <div class="card-body" style="overflow-x: auto; position: relative;">
                                <h2>Your image:</h2>
                                <img v-bind:src="image" alt="image" style="height: 80vh">
                            </div>
                        </div>
                        <div v-bind:class="image !== '' ? 'col-12 col-lg-6 col-xl-4' : undetected.length != 0?'col-6':'col-12'">
                            <div v-if="detected.length != 0" class="card-body">
                                <h2>Students detected:</h2>

                                <form @submit="addStudent" action="#" onsubmit="return false;">
                                    <span class="text-danger">{{ error }}</span>
                                    <div style="display: flex; justify-content: space-between; align-items: center;">
                                        <input v-model="newStudent" class="form-control" required type="list" list="students-list" 
                                            autocomplete="off">
                                        <datalist id="students-list">
                                            <option v-for="(data, index) in students.filter(item => !detected.includes(item.name))" 
                                                :key="index" v-bind:value="data.name"></option>
                                        </datalist>
                                        
                                        <input type="submit" class="btn btn-primary py-2 fs-4 rounded-2 float-right ml-2"
                                            value="Add student"/>
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
                        <div v-if="undetected.length != 0" class="col-12 col-lg-6 col-xl-4">
                            <div class="card-body">
                                <h2>Undetected lines in image:</h2>
                                <SimpleStudentList :students="undetected" :remove-item="()=>{}" :removable="false" :only-marks="false"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>