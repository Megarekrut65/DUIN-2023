<script setup>

defineProps({
    number: {
        type: Number,
        required: true
    },
    mark: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    color:{
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
    <tr v-bind:class = "(selectedItem===number)?'bg-danger':''">
        <td class="border-bottom-0" @click="()=>removeSelf(null)">
            <h6 class="fw-semibold mb-1">{{ count }}</h6>                        
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal" v-bind:style="{color:color}">{{ mark }}</p>
        </td>
        <td class="border-bottom-0 text-center">
            <p class="mb-0 fw-normal">
                <i class="ti ti-x custom-btn" @click="removeSelf"></i>
            </p>
        </td>
    </tr>                                                                                                       
</template>