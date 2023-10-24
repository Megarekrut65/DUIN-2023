<script setup>
import { ref, toRaw } from 'vue';

import MarkCountList from '../MarkCountList.vue';
import { defaultConvert, changeConvert } from "../../assets/js/mark-manager";

const marks = ref(defaultConvert()), mark = ref(""), count = ref(0), color = ref("#000000");

const addMark = () => {
    const obj = { count: count.value, mark: mark.value, color: color.value };
    let found = false;

    for (let i in marks.value) {
        if (marks.value[i].count == obj.count) {
            marks.value[i] = obj;
            found = true;
            break;
        }
    }
    if (!found) marks.value.push(obj);
    marks.value.sort((a, b) => a.count - b.count);

    return false;
};

const removeMark = (item) => {
    const index = marks.value.indexOf(item);
    if (index !== -1) {
        marks.value.splice(index, 1);
    }
};

const error = ref(""), result = ref("");

const saveSettings = () => {
    error.value = "";
    result.value = "";

    if (marks.value.length >= 2){
        changeConvert(toRaw(marks.value)).then(()=>{
            result.value = "Saved!";
        }).catch(err=>{
            console.log(err);
            error.value = "Some errors occurred while saving, please reload the page and try again later!";
        });
        return false;
    } 
    error.value = "There must be at least 2 marks!";

    return false;
};

</script>

<template>
    <div class="card">
        <div class="card-body">
            <h3>Default marks</h3>
            <form class="left-form mb-4" action="#" onsubmit="return false;" @submit="addMark">
                <input v-model="count" type="number" name="count" class="form-control mr-1 mr-md-4" required min="0" maxlength="3"
                    max="100" placeholder="Count" />
                <input v-model="mark" type="text" name="mark" class="form-control mr-1 mr-md-4" maxlength="100"
                    placeholder="Mark" />
                <input v-model="color" type="color" name="color" class="form-control mr-1 mr-md-4" required />
                <input type="submit" class="btn fs-4 rounded-2 bg-primary" value="Add">
            </form>
            <MarkCountList :marks="marks" :remove-item="removeMark"></MarkCountList>
            <div class="mt-4">
                <p style="color:tomato">{{ error }}</p>
            </div>
            <div class="mt-4">
                <input type="button" class="btn fs-4 rounded-2 bg-success" value="Save" @click="saveSettings" />
                <label style="color:green" class="ml-4">{{ result }}</label>
            </div>
        </div>
    </div>
</template>