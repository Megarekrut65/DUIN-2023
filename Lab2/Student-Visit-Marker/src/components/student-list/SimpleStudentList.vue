<script setup>
import { ref } from 'vue';
import SimpleStudentListItem from './SimpleStudentListItem.vue';

const props = defineProps({
    students: {
        type: Array,
        required: true
    },
    removable:{
        type: Boolean,
        required: false,
        default: true
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
<div class="table-responsive mt-4" @click="(event)=>event.target.classList.contains('ti-x')?()=>{}:remove()">
    <table class="table text-nowrap mb-0 align-middle">
        <thead class="text-dark fs-4">
            <tr>
                <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><i class="ti ti-list-numbers"></i></h6>
                </th>
                <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Full name</h6>
                </th>
                <th class="border-bottom-0 text-center" v-if="removable">
                    <h6 class="fw-semibold mb-0">Remove</h6>
                </th>
            </tr>
        </thead>
        <tbody>
            <SimpleStudentListItem v-for="(data, index) in students" :key="index" :number="index+1" :name="data" 
                :selected-item="selectedItem" :remove-self="(event)=>remove(event, data, index + 1)" :removable="removable"/>
        </tbody>
    </table>
</div>                                                                                             
</template>