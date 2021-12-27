import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCMHHAcsVs2bzOsndRgAt6um4EGH4bKmRU",
    authDomain: "khedubaba-clothing-e7a18.firebaseapp.com",
    projectId: "khedubaba-clothing-e7a18",
    storageBucket: "khedubaba-clothing-e7a18.appspot.com",
    messagingSenderId: "110424100634",
    appId: "1:110424100634:web:fb486e56b14b148da4e6a3",
    measurementId: "G-6DQPDF081E"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;