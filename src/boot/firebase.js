// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGC3LrexuSrW6gwf4-MxHJZTiDsGKgGLg",
  authDomain: "mobilebanking-proji.firebaseapp.com",
  databaseURL:
    "https://mobilebanking-proji-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "mobilebanking-proji",
  storageBucket: "mobilebanking-proji.appspot.com",
  messagingSenderId: "83927641380",
  appId: "1:83927641380:web:83e63499674fe0a4e897b1",
  measurementId: "G-ZZKV9XXQX1",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
export default db;
