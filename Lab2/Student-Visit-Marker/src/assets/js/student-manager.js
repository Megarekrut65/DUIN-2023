import { loadWithUser } from "../firebase-js/auth";
import { getStudentList, saveStudentList } from "../firebase-js/firestore";

export const getStudents = ()=>{
    const item = localStorage.getItem("students");
    if(item == null) return [];
    const list = JSON.parse(item);
    if(list == null) return [];
    
    return list;
};

export const saveStudents = (students)=>{
    localStorage.setItem("students", JSON.stringify(students));

    return new Promise((resolve, reject)=>{
        loadWithUser((user)=>{
            if(user){
                saveStudentList(user.uid, students)
                .then(resolve).catch(reject);
            }
        });
    });
};

loadWithUser((user)=>{
    if(user){
        getStudentList(user.uid).then(res=>{
            if(res){
                localStorage.setItem("students", JSON.stringify(res));
                return;
            }
            localStorage.setItem("students", null);
        });
    }
});