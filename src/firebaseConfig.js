// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXitOuIVmbEmMRB598121qmczfk7tNVoY",
  authDomain: "matai-file-upload.firebaseapp.com",
  projectId: "matai-file-upload",
  storageBucket: "matai-file-upload.firebasestorage.app",
  messagingSenderId: "317408841967",
  appId: "1:317408841967:web:86088f128d5b7610308b1a",
  measurementId: "G-T85P07QEQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Storage
const storage = getStorage(app);

export { storage };
