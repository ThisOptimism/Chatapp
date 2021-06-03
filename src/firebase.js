import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase.initializeApp({
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "unichat-be94d.firebaseapp.com",
  projectId: "unichat-be94d",
  storageBucket: "unichat-be94d.appspot.com",
  messagingSenderId: "735161256772",
  appId: "1:735161256772:web:baab74bb54264e8a9d6511"
}).auth();