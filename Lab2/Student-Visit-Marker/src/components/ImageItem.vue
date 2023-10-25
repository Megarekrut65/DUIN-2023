<script setup>
defineProps({
    id: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
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
    <div class="col-md-4">
        <div class="card" style="overflow: hidden;" v-bind:class="(selectedItem === id) ? 'bg-danger' : ''">
            <img v-bind:src="url" class="card-img-top" alt="image" style="height: 300px; width:100%; object-fit: cover;" @click="() => removeSelf(null)">
            <div class="card-body" @click="() => removeSelf(null)">
                <a v-bind:href="url" class="card-link" target="_blank">View</a>
            </div>
            <div class="card-header" style="display: flex; justify-content: space-between;">
                <span> {{ date }}</span>
                <i class="ti ti-x custom-btn" @click="removeSelf"></i>
            </div>
        </div>
    </div>
</template>