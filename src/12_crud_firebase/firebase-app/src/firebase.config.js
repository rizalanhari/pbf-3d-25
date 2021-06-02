import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export const firebaseConfig = {
    apiKey: "AIzaSyDWNTkGWOgxgCJlzpHxj0IEjItArlflI90",
    authDomain: "belajar-react-85e86.firebaseapp.com",
    databaseURL: "https://belajar-react-85e86-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "belajar-react-85e86",
    storageBucket: "belajar-react-85e86.appspot.com",
    messagingSenderId: "244423492095",
    appId: "1:244423492095:web:423b3470555c85a88467ca",
    measurementId: "G-GK41X8X6LY"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const DB = firebase.database();