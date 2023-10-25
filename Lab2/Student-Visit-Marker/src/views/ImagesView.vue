<script setup>
import { ref } from 'vue';
import ImageItem from '../components/ImageItem.vue';
import {getImages} from "../assets/js/image-manager";

const images = ref(getImages());
const selectedItem = ref(-1);

const removeItem = (item)=>{
    const index = images.value.indexOf(item);
    if (index !== -1) {
        images.value.splice(index, 1);
    }
};

const remove = (event, data, number)=>{
    if(number === selectedItem.value && event){
        removeItem(data);
        selectedItem.value = -1;
        return;
    }
    selectedItem.value = event?number:-1;
};

</script>
<template>
    <main>
        <div class="card">
            <div class="card-body">
                <h1 class="mb-4">Saved images</h1>
                <div class="row">
                    <ImageItem v-for="(data, index) in images" :key="index" :id="index"
                        :url="data.url" :selected-item="selectedItem" :date = "data.date"
                        :remove-self="(event)=>remove(event, data, index)" />
                </div>
            </div>
        </div>
    </main>
</template>