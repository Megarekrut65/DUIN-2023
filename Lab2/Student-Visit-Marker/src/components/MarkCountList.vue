<script setup>
import { ref } from 'vue';
import MarkCountListItem from './MarkCountListItem.vue';

const props = defineProps({
    marks: {
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
                <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Count</h6>
                </th>
                <th class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0">Mark</h6>
                </th>
                <th class="border-bottom-0 text-center">
                    <h6 class="fw-semibold mb-0">Remove</h6>
                </th>
            </tr>
        </thead>
        <tbody>
            <MarkCountListItem v-for="(data, index) in marks" :key="index" :number="index" :mark="data.mark" 
                :count="data.count" :color = "data.color" :selected-item="selectedItem" 
                :remove-self="(event)=>remove(event, data, index)"></MarkCountListItem>
        </tbody>
    </table>
</div>                                                                                             
</template>