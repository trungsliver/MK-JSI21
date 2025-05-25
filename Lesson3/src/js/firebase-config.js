
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0tSkJDIVYMjE2xAiJOtYTe-vNaaGGCvo",
    authDomain: "jsi21-lesson4.firebaseapp.com",
    projectId: "jsi21-lesson4",
    storageBucket: "jsi21-lesson4.firebasestorage.app",
    messagingSenderId: "808995962502",
    appId: "1:808995962502:web:c864fdf949cc6b6e56db07",
    measurementId: "G-275KG8Z8FT"
};

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// console.log(firebase.app().name)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
