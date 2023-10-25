<script setup>
import { ref } from 'vue';
import { getSettings,saveSettings } from '../../assets/js/other-settings';

const otherSettings = getSettings();

const saveImage = ref(otherSettings["save-image"]);
const result = ref(""), error = ref("");

const save = () => {

    otherSettings["save-image"] = saveImage.value;
    saveSettings(otherSettings).then(() => {
        result.value = "Saved!";
    }).catch(err => {
        console.log(err);
        error.value = "Some errors occurred while saving, please reload the page and try again later!";
    });
    return false;
};

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3>Other settings</h3>

            <form @submit="save" action="#" onsubmit="return false;">

                <div class="form-item">
                    <label>Save all uploaded images?</label>
                    <input type="checkbox" name="saveImage" v-model="saveImage" />
                </div>
                <div class="mt-4">
                <p style="color:tomato">{{ error }}</p>
                </div>
                <div class="mt-4">
                    <input type="submit" class="btn fs-4 rounded-2 bg-success" value="Save" />
                    <label style="color:green" class="ml-4">{{ result }}</label>
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