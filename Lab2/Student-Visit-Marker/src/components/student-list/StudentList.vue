<script setup>
import { ref } from 'vue';
import StudentListItem from './StudentListItem.vue';

const props = defineProps({
    onlyMarks:{
        type:Boolean,
        required: false,
        default: false
    },
    students: {
        type: Array,
        required: true
    },
    removeItem:{
        type: Function,
        required: true
    }
});

const selectedItem = ref(-1);

const remove = (event, data, number)=>{
    if(number === selectedItem.value && event){
        props.removeItem(data);
        selectedItem.value = -1;
        return;
    }
    selectedItem.value = event?number:-1;
};

</script>

<template>
<div class="table-responsive mt-4">
    <table class="table text-nowrap mb-0 align-middle">
        <thead class="text-dark fs-4">
            <tr>
                <th v-if="!onlyMarks" class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><i class="ti ti-list-numbers"></i></h6>
                </th>
                <th v-if="!onlyMarks" class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Full name</h6>
                </th>
                <th class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0">Mark</h6>
                </th>
                <th v-if="!onlyMarks" class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0">Detected times</h6>
                </th>
                <th v-if="!onlyMarks" class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0">Remove</h6>
                </th>
            </tr>
        </thead>
        <tbody>
            <StudentListItem v-for="(data, index) in students" :key="index" :number="index+1" :only-marks="onlyMarks"
                :name="data.name" :count="data.count" :selected-item="selectedItem"
                :remove-self="(event)=>remove(event, data, index + 1)"></StudentListItem>
        </tbody>
    </table>
</div>                                                                                             
</template>