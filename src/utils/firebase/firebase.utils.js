import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlFls5G_0qTkpH_qkDtadfpX0i9gGbLac",
  authDomain: "ladys-clothing-db.firebaseapp.com",
  projectId: "ladys-clothing-db",
  storageBucket: "ladys-clothing-db.appspot.com",
  messagingSenderId: "1011713525993",
  appId: "1:1011713525993:web:17c6fe7927d15a16b80878",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

//   console.log(userAuth);
//   console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
//   console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
        await setDoc(userDocRef, {
            displayName,
            email,
            createdAt
        });
    } catch (error) {
        console.log('error creating the user', error.message)
    }
  }

  return userDocRef
};
