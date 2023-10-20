<script setup>
import "../assets/css/custom.css";
import { ref } from 'vue';
import {getText} from "../assets/js/home";
import StudentList from "../components/StudentList.vue";

const file = ref(null);

const submitFile=()=>{
    getText(file.value.files[0]).then(text=>console.log(text))

    return false;
};

let number = 1;

const studentName = ref(""), students = ref([{number:1, name:"Sasha", mark:"X"}]);

const submitStudent=()=>{
    console.log(studentName.value)
    students.value.push({number: number++, name: studentName.value, mark:""});

    return false;
};
const removeItem = (item)=>{
    var index = students.value.indexOf(item);
    if (index !== -1) {
        students.value.splice(index, 1);
    }
}

</script>

<template>
  <main>
    <div class="card">
          <div class="card-body">
            <h1 class="mb-4">Dashboard</h1>
            
            <form @submit="submitFile" action="#" onsubmit="return false;" class="left-form mb-4">
              <div class="mb-3">
                <label for="file" class="form-label">Image with students names</label>
                <input type="file" class="form-control" name="file" ref="file">
              </div>
              <div>
                <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 rounded-2" value="Upload" accept="image/png, image/jpeg">
              </div>
            </form>

            <h2>Student list:</h2>
            
            <form @submit="submitStudent" action="#" onsubmit="return false;" class="left-form mb-4">
              <input type="text" class="form-control mr-4" name="name" v-model="studentName" required maxlength="100">
              <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 ml-4 rounded-2" value="Add student">
            </form>

            <StudentList :students=students :remove-item="removeItem"></StudentList>
          </div>
      </div>
  </main>
</template>
