import firebase from 'firebase'

try{
    var firebaseConfig = {
        apiKey: "AIzaSyBPJCeRbGaHNzBWSv38AOlBZgFI5CRc49w",
        authDomain: "clubtime-9d0cb.firebaseapp.com",
        databaseURL: "https://clubtime-9d0cb.firebaseio.com",
        projectId: "clubtime-9d0cb",
        storageBucket: "clubtime-9d0cb.appspot.com",
        messagingSenderId: "1079668349268",
        appId: "1:1079668349268:web:d62cc535192510908e50c1",
        measurementId: "G-ZRJYFEF71T"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig)
} catch(err) {
    if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
    }
}

const FB = firebase

export default FB