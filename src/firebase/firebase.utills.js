import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDC23Ul7ECYkjjCLxA2rqB4ez7mCfEkPbo",
    authDomain: "crown-db-52536.firebaseapp.com",
    databaseURL: "https://crown-db-52536.firebaseio.com",
    projectId: "crown-db-52536",
    storageBucket: "crown-db-52536.appspot.com",
    messagingSenderId: "221049317428",
    appId: "1:221049317428:web:b6477df02dfd1d6d95c261",
    measurementId: "G-X7M0CBR4ZM"
  };
export const createUserProfleDocument=async(userAuth,additionalData) => {

  if(!userAuth) return;

  const userRef=firestore.doc(`users/${userAuth.uid}`);

  const snapshot= await userRef.get()

  if(!snapshot.exists){

    const { displayName,email}= userAuth;

    const createdAt= new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error' ,error.message);
    }
  }

  return userRef;
  
}

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);

  export default firebase;