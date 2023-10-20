<script setup>
import StudentListItem from './StudentListItem.vue';

defineProps({
    students: {
        type: Array,
        required: true
    },
    removeItem:{
        type: Function,
        required: true
    }
})

</script>

<template>
<div class="table-responsive">
    <table class="table text-nowrap mb-0 align-middle">
        <thead class="text-dark fs-4">
            <tr>
                <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0"><i class="ti ti-list-numbers"></i></h6>
                </th>
                <th class="border-bottom-0">
                    <h6 class="fw-semibold mb-0">Full name</h6>
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
            <StudentListItem v-for="(data, index) in students" :key="index" :number="data.number" :name="data.name" :mark="data.mark" :remove-self="()=>removeItem(data)"></StudentListItem>
        </tbody>
    </table>
</div>                                                                                             
</template>