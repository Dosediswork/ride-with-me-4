import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyA701Kz8xsQP6bHCBpfHze-v0h-G8uiWpY",
    authDomain: "ride-with-me-36af6.firebaseapp.com",
    projectId: "ride-with-me-36af6",
    storageBucket: "ride-with-me-36af6.appspot.com",
    messagingSenderId: "22900988907",
    appId: "1:22900988907:web:1f7bb835f3f05fee3257ae"
  };
  





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


