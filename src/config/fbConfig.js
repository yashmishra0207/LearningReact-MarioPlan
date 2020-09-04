import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyD4aB1gigbBksVrUOkSTinwEpO0NPR-z3I",
  authDomain: "marioplan-reactandfirebase.firebaseapp.com",
  databaseURL: "https://marioplan-reactandfirebase.firebaseio.com",
  projectId: "marioplan-reactandfirebase",
  storageBucket: "marioplan-reactandfirebase.appspot.com",
  messagingSenderId: "64957978937",
  appId: "1:64957978937:web:5509bf2c3f3589de9a30e8",
  measurementId: "G-ZFFWJZ8GP6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore.settings({ timestampsInSnapshots: true });
// firebase.analytics();

export default firebase;