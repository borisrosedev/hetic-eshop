// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9YHR4o4rFVeS1AgGKkRc8SHrOpoCtb08",
  authDomain: "e-shop-e325e.firebaseapp.com",
  projectId: "e-shop-e325e",
  storageBucket: "e-shop-e325e.appspot.com",
  messagingSenderId: "148520991492",
  appId: "1:148520991492:web:942317272d3b419c6dee51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {
    app,
    auth
}