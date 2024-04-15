import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyB79Q2gj4rxvVPijVxl_G6LQDetCxGW54I",
    authDomain: "login-22f2a.firebaseapp.com",
    projectId: "login-22f2a",
    storageBucket: "login-22f2a.appspot.com",
    messagingSenderId: "673945773979",
    appId: "1:673945773979:web:02acc28606547cfefc633e"
  };

  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);
  auth.languageCode = 'en'
  const provider = new googleAuthProvider();

  const googleLogin=document.getElementById("google-login-btn");
  googleLogin.addEventListener("click", function(){
    alert(5);
  })