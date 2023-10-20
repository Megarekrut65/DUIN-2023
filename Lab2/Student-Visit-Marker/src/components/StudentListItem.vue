<script setup>
defineProps({
    number: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    removeSelf:{
        type: Function,
        required: true
    }
});

</script>

<template>
    <tr>
        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">{{ number }}</h6></td>
        <td class="border-bottom-0">
            <h6 class="fw-semibold mb-1">{{ name }}</h6>                        
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">{{ mark }}</p>
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal"><i class="ti ti-x" @click="removeSelf"></i></p>
        </td>
    </tr>                                                                                                       
</template>