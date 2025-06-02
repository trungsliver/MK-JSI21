
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    
};

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// console.log(firebase.app().name)


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
// const auth = getAuth(app);

export { database };
