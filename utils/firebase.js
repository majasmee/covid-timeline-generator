// import firebase from 'firebase/app'
// import "firebase/firestore"

// const config = {
//     apiKey: "AIzaSyDgtV6AlGCCr_GGu4xH_rAdiIHbUjJK7uc",
//     authDomain: "covid-timeline-generator-e65bf.firebaseapp.com",
//     projectId: "covid-timeline-generator-e65bf",
//     storageBucket: "covid-timeline-generator-e65bf.appspot.com",
//     messagingSenderId: "1064072328254",
//     appId: "1:1064072328254:web:632490b3bb33841f224d6f"
// };

// if (!firebase.apps.length) {
//     firebase.initializeApp(config)
// }

// const firestore = firebase.firestore();

// export { firestore };

import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const config = {
    apiKey: "AIzaSyDgtV6AlGCCr_GGu4xH_rAdiIHbUjJK7uc",
    authDomain: "covid-timeline-generator-e65bf.firebaseapp.com",
    projectId: "covid-timeline-generator-e65bf",
    storageBucket: "covid-timeline-generator-e65bf.appspot.com",
    messagingSenderId: "1064072328254",
    appId: "1:1064072328254:web:632490b3bb33841f224d6f"
};

const firebaseApp = initializeApp(config)
const firestore = getFirestore(firebaseApp)

export { firestore }