<script setup>
import '../assets/css/custom.css';
import { ref } from 'vue';
import StudentList from '../components/student-list/StudentList.vue';
import FileUpload from '../components/FileUpload.vue';
import { getMark } from '../assets/js/mark-manager';
import { copyToClipboard } from '../assets/js/coping';

const studentsList = JSON.parse(localStorage.getItem('students'));

const studentName = ref(''),
  students = ref(studentsList ? studentsList : []),
  onlyMarks = ref(JSON.parse(localStorage.getItem("onlyMarks")));

const marksClick = ()=>{
  localStorage.setItem("onlyMarks", onlyMarks.value);
} 

const submitStudent = () => {
  addStudent(studentName.value);

  return false;
};

const addStudent = (name) => {
  students.value.push({ name: name, count: 0 });
  studentName.value = '';

  localStorage.setItem('students', JSON.stringify(students.value));
};

const removeItem = (item) => {
  const index = students.value.indexOf(item);
  if (index !== -1) {
    students.value.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students.value));
  }
};


const handlePaste = (event) => {
  event.preventDefault();
  const clipboardData = event.clipboardData || window.clipboardData;
  const pastedText = clipboardData.getData('text');

  const items = pastedText.split(/\n/)
    .filter(item => item.trim().length > 0)
    .map(item=>item.replace(/(\r\n|\n|\r)/gm, ""));

  if (items.length < 2) {
    studentName.value = pastedText;
    return;
  }

  for (let i in items) {
    addStudent(items[i]);
  }
};

const acceptClear = ref(false);

const removeAll = () => {
  if (acceptClear.value) {
    students.value = [];
    localStorage.setItem('students', JSON.stringify(students.value));
    acceptClear.value = false;
    return;
  }

  acceptClear.value = true;
};

const acceptMarks = ref(false);

const removeMarks = () => {
  if (acceptMarks.value) {
    students.value.forEach(item => (item.count = 0));
    localStorage.setItem('students', JSON.stringify(students.value));
    acceptMarks.value = false;
    return;
  }

  acceptMarks.value = true;
};

const submitDetecting = (detected) => {
  for (let i in detected) {
    for (let j in students.value) {
      if (detected[i].name === students.value[j].name) {
        students.value[j].count++;
      }
    }
  }
  localStorage.setItem('students', JSON.stringify(students.value));
};

const copied = ref("");

const convertContent = (item)=>{
  if (onlyMarks.value) return `${getMark(item.count)}`;

  return `${item.name}\t${getMark(item.count)}`;
};

const copy = ()=>{
  const content = students.value.map(convertContent).join("\n");
  copyToClipboard(content);
  copied.value = "Copied!";
  setTimeout(()=>copied.value = "", 2000);
};

</script>

<template>
  <main>
    <div class="card">
      <div class="card-body">
        <h1 class="mb-4">Dashboard</h1>
        <FileUpload :students="students" :submit="submitDetecting"></FileUpload>

        <h2>Student list <i class="ti ti-copy custom-btn" @click="copy"></i> <span style="color: green;">{{ copied }}</span></h2>

        <form @submit="submitStudent" action="#" onsubmit="return false;" class="left-form mb-4 container-fluid">
          <div class="row" style="width: 100%; align-items: center">
            <div class="col-12 col-lg-6 col-md-6 mb-4" style="display: flex; align-items: center">
              <input type="text" class="form-control" name="name" v-model="studentName" @paste="handlePaste" required
                maxlength="100" placeholder="Student name..." style="width: 100%" />
              <input type="submit" class="btn btn-primary py-8 fs-4 rounded-2 float-right ml-2" value="Add student" />
            </div>
            <div class="col-4 col-lg-2 col-md-2 mb-4">
              <input type="button" class="btn py-8 fs-4 rounded-2 float-right"
                v-bind:class="acceptMarks ? 'btn-warning' : 'btn-outline-dark'" value="Clear marks"
                @click="removeMarks" />
            </div>
            <div class="col-4 col-lg-2 col-md-2 mb-4 float-right">
              <div class="text-center">
                <label for="marks">Only marks</label>
                <br />
                <input type="checkbox" name="marks" v-model="onlyMarks" @change="marksClick"/>
              </div>
            </div>
            <div class="col-4 col-lg-2 col-md-2 mb-4">
              <input type="button" class="btn py-8 fs-4rounded-2 float-right"
                v-bind:class="acceptClear ? 'btn-danger' : 'btn-outline-dark'" value="Remove all" @click="removeAll" />
            </div>
          </div>
        </form>

        <StudentList :students="students" :remove-item="removeItem" :only-marks="onlyMarks"></StudentList>
      </div>
    </div>
  </main>
</template>
