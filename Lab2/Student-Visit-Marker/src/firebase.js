import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyA4jqC8aoZClYtYFUVo27H7rP7nzg3M8fY",
    authDomain: "student-visit-marker.firebaseapp.com",
    projectId: "student-visit-marker",
    storageBucket: "student-visit-marker.appspot.com",
    messagingSenderId: "324725378707",
    appId: "1:324725378707:web:7ee388b9597138c9c6c766",
    measurementId: "G-KJE36VKVSW"
}

firebase.initializeApp(firebaseConfig)

export default firebase