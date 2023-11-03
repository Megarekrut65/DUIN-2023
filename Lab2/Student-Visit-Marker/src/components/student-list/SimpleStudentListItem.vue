<script setup>
import "../../assets/css/custom.css";

defineProps({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    removable: {
        type: Boolean,
        required: false,
        default: true
    },
    removeSelf: {
        type: Function,
        required: true
    },
    selectedItem: {
        type: Number,
        required: true
    }
});

</script>

<template>
    <tr v-bind:class="(selectedItem === number) ? 'bg-danger' : ''">
        <td class="border-bottom-0">
            <h6 class="fw-semibold mb-0">{{ number }}</h6>
        </td>
        <td class="border-bottom-0">
            <h6 class="fw-semibold mb-1">{{ name }}</h6>
        </td>
        <td class="border-bottom-0 text-center" v-if="removable">
            <p class="mb-0 fw-normal">
                <i class="ti ti-x custom-btn" @click="removeSelf"></i>
            </p>
        </td>
    </tr>
</template>