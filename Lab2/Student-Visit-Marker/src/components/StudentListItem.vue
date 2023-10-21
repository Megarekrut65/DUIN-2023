<script setup>
import "../assets/css/custom.css";
import { getColor, getMark } from "../assets/js/mark-manager";

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
    <tr v-bind:class = "(selectedItem===number)?'bg-danger':''">
        <td v-if="!onlyMarks" class="border-bottom-0"><h6 class="fw-semibold mb-0">{{ number }}</h6></td>
        <td v-if="!onlyMarks" class="border-bottom-0" @click="()=>removeSelf(null)">
            <h6 class="fw-semibold mb-1">{{ name }}</h6>                        
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal" v-bind:style="{color:getColor(count)}">{{ getMark(count)}}</p>
        </td>
        <td v-if="!onlyMarks" class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">{{ count }}</p>
        </td>
        <td v-if="!onlyMarks" class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">
                <i class="ti ti-x custom-btn" @click="removeSelf"></i>
            </p>
        </td>
    </tr>                                                                                                       
</template>