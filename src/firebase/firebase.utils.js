import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCUcRlxcYr5bRLiWTCrSBdYye-SnurDHJ4",
  authDomain: "my-fetch-db.firebaseapp.com",
  databaseURL: "https://my-fetch-db.firebaseio.com",
  projectId: "my-fetch-db",
  storageBucket: "my-fetch-db.appspot.com",
  messagingSenderId: "50363109968",
  appId: "1:50363109968:web:2ad85c905ffb21d2777755",
  measurementId: "G-G1F1LHERVB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;