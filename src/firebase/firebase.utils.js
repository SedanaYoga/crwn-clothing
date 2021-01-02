import firebase from "firebase/app";
import "firebase/firestore"; //For the storage and automatically attach to firebase above
import "firebase/auth"; //For the auth and automatically attach to firebase above

const config = {
  apiKey: "AIzaSyCiv5dDKRCXgXb6Fn2MUT4PUHoFiNy26es",
  authDomain: "crwn-db-10991.firebaseapp.com",
  projectId: "crwn-db-10991",
  storageBucket: "crwn-db-10991.appspot.com",
  messagingSenderId: "507431829401",
  appId: "1:507431829401:web:6eda5a39be4e5b710bdd08",
  measurementId: "G-ZVLT7GZQ0V",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
