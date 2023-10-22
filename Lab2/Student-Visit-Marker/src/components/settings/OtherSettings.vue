<script setup>
import { ref } from 'vue';

const value = localStorage.getItem("saveImage");

const saveImage = ref(value);

const saveSettings = () => {

    localStorage.setItem("saveImage", saveImage.value);

    return false;
};

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3>Other settings</h3>

            <form @submit="saveSettings" action="#" onsubmit="return false;">

                <div class="form-item">
                    <label>Save all uploaded images?</label>
                    <input type="checkbox" name="saveImage" v-model="saveImage"/>
                </div>
                <div class="mt-4">
                    <input type="submit" class="btn fs-4 rounded-2 bg-success" value="Save" />
                </div>
            </form>
        </div>
    </div>
</template>


<style>
.form-item {
    display: flex;
    align-items: center;
}

.form-item>* {
    margin-left: 10px;
}
</style>