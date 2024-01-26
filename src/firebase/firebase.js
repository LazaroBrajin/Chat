// firebase/firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBd2RdEso2uIPnWV-6QRZQ9zrS99tH_YJY",
    authDomain: "chat-7236f.firebaseapp.com",
    projectId: "chat-7236f",
    storageBucket: "chat-7236f.appspot.com",
    messagingSenderId: "423309080102",
    appId: "1:423309080102:web:52d93d1c37935b56ed18e7",
    measurementId: "G-VE4EW1LXVE"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;





