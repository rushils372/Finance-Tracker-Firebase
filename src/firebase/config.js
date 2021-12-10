import firebase from "firebase";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBx7mqK_J5NQCtRRxwyJ0KVGAwfZvZXQt8",
    authDomain: "mymoney-financial-tracker.firebaseapp.com",
    projectId: "mymoney-financial-tracker",
    storageBucket: "mymoney-financial-tracker.appspot.com",
    messagingSenderId: "358150442997",
    appId: "1:358150442997:web:314334422361feabb3dabc"
  };

  // Init Firebase
  firebase.initializeApp(firebaseConfig)

  // Init Service
  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  // Timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }