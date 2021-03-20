import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBmUkrnvsQSJNj-CMYh5O7mQ5B1Oo2j5qI",
  authDomain: "err404hackathon.firebaseapp.com",
  projectId: "err404hackathon",
  storageBucket: "err404hackathon.appspot.com",
  messagingSenderId: "714499707407",
  appId: "1:714499707407:web:317d7aadb3f980ae97c97a",
  measurementId: "G-GMQ0PPRB9K",
});

const db = firebaseApp.firestore();

export { db };
