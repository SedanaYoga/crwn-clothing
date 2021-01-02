///////////// Template for firebase auth and database (firestore)
import firebase from "firebase/app";
import "firebase/firestore"; //For the storage and automatically attach to firebase above
import "firebase/auth"; //For the auth and automatically attach to firebase above

////////// Configuration from the firebase site
const firebaseConfig = {
  apiKey: "AIzaSyCiv5dDKRCXgXb6Fn2MUT4PUHoFiNy26es",
  authDomain: "crwn-db-10991.firebaseapp.com",
  projectId: "crwn-db-10991",
  storageBucket: "crwn-db-10991.appspot.com",
  messagingSenderId: "507431829401",
  appId: "1:507431829401:web:6eda5a39be4e5b710bdd08",
  measurementId: "G-ZVLT7GZQ0V",
};

// Initialization config object
firebase.initializeApp(firebaseConfig);

//Export auth and firestore
// basic const of auth and firestore
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Create provider to auth google -> remember the "new" syntax
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//Export signInWithGoogle in order to used to other components
//For button on signin.component.jsx
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Creating new user to database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  //if userAuth not exists
  if (!userAuth) return;

  //if userAuth exists
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
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export default firebase;
