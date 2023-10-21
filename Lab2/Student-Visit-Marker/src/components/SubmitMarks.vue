<script setup>
import StudentList from "../components/StudentList.vue";
import "../assets/css/custom.css";

defineProps({
    students: {
        type: Array,
        required: true
    },
    detected: {
        type: Array,
        required: true
    },
    removeItem:{
        type: Function,
        required: true
    },
    isActive:{
        type:Boolean,
        required: true
    },
    submit:{
        type:Function,
        required: true
    },
    cancel:{
        type: Function,
        required: true
    }
});

</script>

<template>
    <main>
        <div v-bind:class="isActive?'modal-container':'modal-container hide'">
            <div class="modal-list">
                <div class="card">
                    <div v-if="detected.length != 0" class="card-body">
                        <h2>Students detected:</h2>
                        <StudentList :students="detected" :remove-item="removeItem" :only-marks="false"></StudentList>
                        <br>
                        <div style="display: flex; justify-content: space-around;" class="mt-4">
                            <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Mark all" @click="submit">
                            <input type="button" class="btn btn-danger py-8 fs-4 mb-1 rounded-2" value="Cancel" @click="cancel">
                        </div>
                    </div>
                    <div v-else class="card-body" style="text-align: center;">
                        <h2>No one has been identified from the photo!</h2>
                        <p>Maybe some error has occurred...</p>
                        <br>
                        <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Ok" @click="submit">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>