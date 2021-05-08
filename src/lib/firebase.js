import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBB6cyVEDxYZBuSRivJ0eR5oTOp7iHMb3g",
    authDomain: "periodicotesi.firebaseapp.com",
    projectId: "periodicotesi",
    storageBucket: "periodicotesi.appspot.com",
    messagingSenderId: "409937769159",
    appId: "1:409937769159:web:960ba063d8e0862dcbc4e2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase