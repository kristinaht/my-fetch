import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDDklDJoULH5elIB0tsm9bBKS7M5a9Uf0g",
  authDomain: "my-fetch-app.firebaseapp.com",
  databaseURL: "https://my-fetch-app.firebaseio.com",
  projectId: "my-fetch-app",
  storageBucket: "my-fetch-app.appspot.com",
  messagingSenderId: "1090680607120",
  appId: "1:1090680607120:web:223451f2938281591be315"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user');
    }
  }

  return userRef;
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;