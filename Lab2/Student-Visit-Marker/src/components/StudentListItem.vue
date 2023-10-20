<script setup>
import "../assets/css/custom.css";

defineProps({
    onlyMarks:{
        type:Boolean,
        required: false,
        default: false
    },
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    removeSelf:{
        type: Function,
        required: true
    },
    selectedItem:{
        type: Number,
        required: true
    }
});

</script>

<template>
    <tr>
        <td v-if="!onlyMarks" class="border-bottom-0"><h6 class="fw-semibold mb-0">{{ number }}</h6></td>
        <td v-if="!onlyMarks" class="border-bottom-0">
            <h6 class="fw-semibold mb-1">{{ name }}</h6>                        
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">{{ mark }}</p>
        </td>
        <td v-if="!onlyMarks" class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">{{ count }}</p>
        </td>
        <td v-if="!onlyMarks" class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal"><i v-bind:class = "(selectedItem===number)?'ti ti-x color-red':'ti ti-x custom-btn'" @click="removeSelf" ></i></p>
        </td>
    </tr>                                                                                                       
</template>