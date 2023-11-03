<script setup>
import '../assets/css/custom.css';
import { ref, toRaw } from 'vue';
import StudentList from '../components/student-list/StudentList.vue';
import FileUpload from '../components/FileUpload.vue';
import { getMark, getColor } from '../assets/js/mark-manager';
import { copyToClipboard } from '../assets/js/coping';
import { getStudents, saveStudents } from '../assets/js/student-manager';
import StudentsPreview from '../components/StudentsPreview.vue';
import QuestionWindow from '../components/QuestionWindow.vue';

const studentName = ref(''),
  students = ref(getStudents()),
  onlyMarks = ref(JSON.parse(localStorage.getItem("onlyMarks")));

const marksClick = () => {
  localStorage.setItem("onlyMarks", onlyMarks.value);
}

const nameInput = ref();

const submitStudent = () => {
  if(studentName.value.trim().length == 0){
    nameInput.value.value = "";

    nameInput.value.reportValidity();
    nameInput.value.focus();

    return false;
  }
  addStudent(studentName.value.trim());

  return false;
};

const addStudent = (name) => {
  students.value.push({ name: name, count: 0 });
  students.value.sort((a, b) => a.name.localeCompare(b.name));
  studentName.value = '';

  saveStudents(toRaw(students.value));
};

const removeItem = (item) => {
  const index = students.value.indexOf(item);
  if (index !== -1) {
    students.value.splice(index, 1);
    saveStudents(toRaw(students.value));
  }
};

const changeDetected = (delta, item)=>{
  const index = students.value.indexOf(item);
  if (index == -1) return;

  students.value[index].count += delta;
  if(students.value[index].count < 0) students.value[index].count = 0;
  saveStudents(toRaw(students.value));
};

const pasteStudents = ref([]);

const removePasteItem = (data) => {
    const index = pasteStudents.value.indexOf(data);
    if (index != -1) {
      pasteStudents.value.splice(index, 1);
    }
};

const handlePaste = (event) => {
  event.preventDefault();
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedText = clipboardData.getData('text');

    const items = pastedText.split(/\n/)
        .filter(item => item.trim().length > 0)
        .map(item => item.replace(/(\r\n|\n|\r)/gm, "").substr(0, 40));

    if (items.length < 2) {
        submitPaste(items);
        return;
    }
    
    event.target.blur();

    pasteStudents.value = [];
    for (let i in items) {
      pasteStudents.value.push(items[i]);
    }
};

const submitPaste = (items)=>{
  if(items){
    studentName.value = items[0];
    return;
  }

  for (let i in pasteStudents.value) {
    students.value.push({ name: pasteStudents.value[i], count: 0 });
  }
  students.value.sort((a, b) => a.name.localeCompare(b.name));
  pasteStudents.value = [];
  saveStudents(toRaw(students.value));
};

const cancelPaste = ()=>{
  pasteStudents.value = [];
};

const question = ref(""), questionSubmit = ref(()=>{}), questionCancel = ref(()=>question.value = "");

const removeAll = () => {
  question.value = "Do you really want to remove all students?";
  questionSubmit.value = ()=>{
    students.value = [];
    saveStudents(toRaw(students.value));
    
    question.value = "";
  };
};

const removeMarks = () => {
  question.value = "Do you really want to clear all marks?";
  questionSubmit.value = ()=>{
    students.value.forEach(item => (item.count = 0));
    saveStudents(toRaw(students.value));
    
    question.value = "";
  };
};

const submitDetecting = (detected) => {
  for (let i in detected) {
    for (let j in students.value) {
      if (detected[i] === students.value[j].name) {
        students.value[j].count++;
      }
    }
  }
  saveStudents(toRaw(students.value));
};

const copied = ref("");

const convertContent = (item) => {
  if (onlyMarks.value) return {mark:getMark(item.count), color:getColor(item.count)};

  return {name:item.name, mark:getMark(item.count), color:getColor(item.count)};
};

const copy = () => {
  const content = students.value.map(convertContent);
  copyToClipboard(content);
  copied.value = "Copied!";
  setTimeout(() => copied.value = "", 2000);
};


</script>

<template>
  <main>
    <div class="card">
      <div class="card-body">
        <h1 class="mb-4">Dashboard</h1>
        <FileUpload :students="students" :submit="submitDetecting"></FileUpload>

        <h2>Student list <i class="ti ti-copy custom-btn" @click="copy"></i> <span
            style="color: green; font-size: 0.7em;">{{ copied }}</span></h2>

        <form @submit="submitStudent" action="#" onsubmit="return false;" class="left-form mb-4 container-fluid">
          <div class="row" style="width: 100%; align-items: center">

            <div class="col-12 col-lg-6 col-md-6 mb-4" style="display: flex; align-items: center">
              <input ref="nameInput" type="text" class="form-control" name="name" v-model="studentName" @paste="handlePaste" required
                maxlength="40" placeholder="Student name..." style="width: 100%" />
              <input type="submit" class="btn btn-primary py-2 fs-4 rounded-2 float-right ml-2" value="Add student" />
            </div>

            <div class="col-6 col-lg-2 col-md-2 col-sm-4 mb-4">
              <input type="button" class="btn py-2 fs-4 rounded-2 float-right btn-warning" value="Clear marks"
                @click="removeMarks" />
            </div>

            <div class="col-6 col-lg-2 col-md-2 col-sm-4 mb-4 float-right">
              <div class="text-center">
                <label for="marks">Only marks</label>
                <br />
                <input type="checkbox" name="marks" v-model="onlyMarks" @change="marksClick" />
              </div>
            </div>

            <div class="col-6 col-lg-2 col-md-2 col-sm-4 mb-4">
              <input type="button" class="btn py-2 fs-4rounded-2 float-right btn-danger"  value="Remove all" @click="removeAll" />
            </div>

          </div>
        </form>

        <StudentList :students="students" :remove-item="removeItem" :only-marks="onlyMarks" :change-detected="changeDetected"></StudentList>
      </div>
    </div>
    <StudentsPreview :submit="submitPaste" :cancel="cancelPaste" :students="pasteStudents" :remove-item="removePasteItem"></StudentsPreview>
    <QuestionWindow :question="question" :submit="questionSubmit" :cancel="questionCancel"></QuestionWindow>
  </main>
</template>
