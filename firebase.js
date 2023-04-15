// Import the functions you need from the SDKs you need
//import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBTW3RBQqZgVwts3005vdgjM71EjAKVJ8M",
  authDomain: "fir-auth-ad418.firebaseapp.com",
  projectId: "fir-auth-ad418",
  storageBucket: "fir-auth-ad418.appspot.com",
  messagingSenderId: "103148700882",
  appId: "1:103148700882:web:4b06dbcfb81b9facd3990b"
};
// Use this to initialize the firebase App
const firebaseApp =firebase.initializeApp(firebaseConfig);


const auth = firebase.auth()

export { auth };