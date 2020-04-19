import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDg6G_VA64THdW0zmqwgGB45pKIvVR4NZM",
    authDomain: "shoppingreactapp.firebaseapp.com",
    databaseURL: "https://shoppingreactapp.firebaseio.com",
    projectId: "shoppingreactapp",
    storageBucket: "shoppingreactapp.appspot.com",
    messagingSenderId: "413471815774",
    appId: "1:413471815774:web:6c4f37f4d3463ea4639ccf"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
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
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
