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

const studentsList = JSON.parse(localStorage.getItem("students"));

const studentName = ref(""), students = ref(studentsList?studentsList:[]), onlyMarks=ref(false);

const submitStudent=()=>{
  students.value.push({name: studentName.value, count:0, mark:"X"});
  studentName.value = "";

  localStorage.setItem("students", JSON.stringify(students.value));

  return false;
};
const removeItem = (event, item)=>{

  var index = students.value.indexOf(item);
  if (index !== -1) {
    students.value.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students.value));
  }
};

const checked = (event)=>{
  onlyMarks.value = event.target.checked;
};

</script>

<template>
  <main>
    <div class="card">
          <div class="card-body">
            <h1 class="mb-4">Dashboard</h1>
            
            <form @submit="submitFile" action="#" onsubmit="return false;" class="left-form mb-4">
              <div class="mb-3">
                <label for="file" class="form-label">Image with students names</label>
                <input type="file" class="form-control" name="file" ref="file" accept="image/png, image/jpeg">
              </div>
              <div>
                <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 rounded-2" value="Upload" >
              </div>
            </form>

            <h2>Student list:</h2>
            
            <form @submit="submitStudent" action="#" onsubmit="return false;" class="left-form mb-4">
              <input type="text" class="form-control mr-4" name="name" v-model="studentName" required maxlength="100" placeholder="Student name...">
              
              <div style="width: 100px; display: flex; flex-direction: column;">
                <label for="marks">Only marks</label>
                <input type="checkbox" name="marks" @click="checked" />
                
              </div>
              
              <input type="submit" class="btn btn-primary py-8 fs-4 mb-1 ml-4 rounded-2" value="Add student" >
            </form>

            <StudentList :students=students :remove-item="removeItem" :only-marks="onlyMarks"></StudentList>
          </div>
      </div>
  </main>
</template>
