// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEDMMT90YuTJxBvdWl1jn_xVnDQLusE0U",
  authDomain: "mataibeta-6582a.firebaseapp.com",
  projectId: "mataibeta-6582a",
  storageBucket: "mataibeta-6582a.appspot.com",
  messagingSenderId: "960041104056",
  appId: "1:960041104056:web:00ff4a021ff112ae643a4d"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

firebase.getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      unsubscribe();
      resolve(user);
    }, reject);
  })
};

export default firebase

 