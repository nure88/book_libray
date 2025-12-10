// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb3cc0EMnt3YVuM2Ih3FMJ5h5uZBnjKLI",
  authDomain: "book-libray-project.firebaseapp.com",
  projectId: "book-libray-project",
  storageBucket: "book-libray-project.firebasestorage.app",
  messagingSenderId: "989952835242",
  appId: "1:989952835242:web:bfa6b3900023df6a1c9ad3"
};
//Firebase Project Name: Book Libray Project

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);