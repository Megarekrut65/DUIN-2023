<script setup>
import "../assets/css/custom.css";
import "../assets/css/loader.css"

defineProps({
    isActive:{
        type:Boolean,
        required: true
    }
});

</script>

<template>
    <main>
        <div v-bind:class="isActive?'modal-container':'modal-container hide'">
            <div style="margin-top: 50vh; margin-left: 50vw;">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        </div>
    </main>
</template>