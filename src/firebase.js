import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({

    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyCh_xI9iv7NTYKGcKnPnYW-iG45MADwUjw",
    authDomain: "messengerclone-c1288.firebaseapp.com",
    databaseURL: "https://messengerclone-c1288.firebaseio.com",
    projectId: "messengerclone-c1288",
    storageBucket: "messengerclone-c1288.appspot.com",
    messagingSenderId: "285489699727",
    appId: "1:285489699727:web:49ac290e272578695589fa",
    measurementId: "G-KB06HPCE66"


});

const db = firebaseApp.firestore();

export default db;