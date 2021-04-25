import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXXVYKg2JYWDtYiNd14KjmTXuN78aQsCc",
  authDomain: "evernote-ecbcf.firebaseapp.com",
  projectId: "evernote-ecbcf",
  storageBucket: "evernote-ecbcf.appspot.com",
  messagingSenderId: "453908741594",
  appId: "1:453908741594:web:ef24ced8540ac13bb394e3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

const auth = firebase.auth();

export { db, storage, auth };
