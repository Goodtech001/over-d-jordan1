// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi9vKMi3Tgcsy4VKNPzoVo1AlyTe8i6gk",
  authDomain: "over-d-jordan.firebaseapp.com",
  projectId: "over-d-jordan",
  storageBucket: "over-d-jordan.firebasestorage.app",
  messagingSenderId: "357279297581",
  appId: "1:357279297581:web:2b521efd0a383e332388a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

//inputs
//  const email = document.getElementById('email').value;
//  const password = document.getElementById('password').value;
//  submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
    event.preventDefault()
    
    const email = document.getElementById("EMAIL").value;
    const password = document.getElementById("PASSWORD").value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("creating Account...");
        // window.location.href = "grand.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
})