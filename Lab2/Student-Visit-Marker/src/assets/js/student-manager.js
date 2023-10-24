import { loadWithUser } from "../firebase-js/auth";
import { getStudentList, saveStudentList } from "../firebase-js/firestore";

export const getStudents = ()=>{
    const item = localStorage.getItem("students");
    if(item == null) return [];
    const list = JSON.parse(item);
    if(list == null || list.length < 2) return [];
    
    return list;
};

export const saveStudents = (students)=>{
    localStorage.setItem("students", JSON.stringify(students));

    loadWithUser((user)=>{
        if(user){
            saveStudentList(user.uid, students);
        }
    });
};

loadWithUser((user)=>{
    if(user){
        getStudentList(user.uid).then(res=>{
            if(res){
                localStorage.setItem("students", JSON.stringify(res));
            }
        });
    }
});