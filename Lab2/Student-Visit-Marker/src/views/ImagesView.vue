<script setup>
import { ref } from 'vue';
import ImageItem from '../components/ImageItem.vue';
import {getImages, removeImage} from "../assets/js/image-manager";

const images = ref(getImages());
const selectedItem = ref("");

const removeItem = (id)=>{
    removeImage(id).catch(err=>console.log(err));
    delete images.value[id];
};

const remove = (event, data, id)=>{
    if(id === selectedItem.value && event){
        removeItem(id);
        selectedItem.value = "";
        return;
    }
    selectedItem.value = event?id:"";
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