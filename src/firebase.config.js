// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgrCvTYkxAZcwB_IiGqFYPwgVcs79Wczc",
  authDomain: "brandshop-d642b.firebaseapp.com",
  projectId: "brandshop-d642b",
  storageBucket: "brandshop-d642b.appspot.com",
  messagingSenderId: "750699914741",
  appId: "1:750699914741:web:9aa72ff8cc0d9ca464acbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);