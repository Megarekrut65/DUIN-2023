<script setup>
import { ref } from 'vue';
import ImageItem from '../components/ImageItem.vue';
import {getImages, removeImage} from "../assets/js/image-manager";

const obj = getImages();
let allImages = Object.keys(obj).map(key => ({ key, value: obj[key] })).sort((a, b)=>new Date(b.value.date) - new Date(a.value.date));

const images = ref(allImages);
const selectedItem = ref("");

const removeItem = (id)=>{
    removeImage(id).catch(err=>console.log(err));
    
    allImages = allImages.filter(item=>item.key != id);

    findByDate();
};

const remove = (event, id)=>{
    if(id === selectedItem.value && event){
        removeItem(id);
        selectedItem.value = "";
        return;
    }
    selectedItem.value = event?id:"";
};

const date = ref("");

const findByDate = ()=>{
    if(date.value == ""){
        images.value = allImages;
        return false;
    }

    const result = [];

    for(let i in allImages){
        if(new Date(allImages[i].value.date).getDate() == new Date(date.value).getDate()) result.push(allImages[i]);
    }

    images.value = result;

    return false;
};

</script>
<template>
    <main>
        <div class="card">
            <div class="card-body">
                <h1 class="mb-4">Saved images</h1>
                <form @submit="findByDate" action="#" onsubmit="return false;" class="mb-4" style="display: flex; align-items: center;">
                    <input type="date" class="from-control" v-model="date">
                    <input type="submit" value="Search" class="btn btn-primary py-1 fs-4 rounded-2 ml-2">
                </form>
                <div class="row mt-4">
                    <ImageItem v-for="(data, index) in images" :key="index" :id="data.key"
                        :url="data.value.url" :selected-item="selectedItem" :date = "data.value.date"
                        :remove-self="(event)=>remove(event, data.key)" />
                </div>
            </div>
        </div>
    </main>
</template>