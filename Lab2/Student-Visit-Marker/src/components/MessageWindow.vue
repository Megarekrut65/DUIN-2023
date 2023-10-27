<script setup>
import "../assets/css/custom.css";

defineProps({
    message: {
        type: String,
        required: true
    },
    submit: {
        type: Function,
        required: true
    },
    cancel: {
        type: Function,
        required: true
    }
});

</script>

<template>
    <main>
        <div v-bind:class="message !== ''? 'modal-container' : 'modal-container hide'" style="overflow-y: hidden;">
            <div class="modal-list">
                <div class="card">
                    <div class="card-body">
                        <h3>{{ message }}</h3>
                        <div style="display: flex; justify-content: space-around;" class="mt-4">
                            <input type="button" class="btn btn-success py-8 fs-4 mb-1 rounded-2" value="Ok"
                                @click="submit">
                            <input type="button" class="btn btn-danger py-8 fs-4 mb-1 rounded-2" value="Cancel"
                                @click="cancel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>