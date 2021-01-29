// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAkgKx2b_MKPyXdfeP5YY_YD7nGcvQqHuA",
    authDomain: "twitter-simple-clone.firebaseapp.com",
    projectId: "twitter-simple-clone",
    storageBucket: "twitter-simple-clone.appspot.com",
    messagingSenderId: "367816914819",
    appId: "1:367816914819:web:0e2ba51ddcacd5460928b6",
    measurementId: "G-05E1MT8W17"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;