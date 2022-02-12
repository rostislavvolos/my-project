// import firebase from "firebase";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

//  const firebaseApp = firebase.initializeApp({

// });

const firebaseConfig = {
  apiKey: "AIzaSyDdEgDMoJVgTxTdpBfOtY7LXtDgTohKITM",
  authDomain: "my-project-inst-clone.firebaseapp.com",
  databaseURL: "https://my-project-inst-clone-default-rtdb.firebaseio.com",
  projectId: "my-project-inst-clone",
  storageBucket: "my-project-inst-clone.appspot.com",
  messagingSenderId: "505660704470",
  appId: "1:505660704470:web:9252b59b468d232a1fab77",
  measurementId: "G-B3DVYJGT0D",
}


export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
export const storage = getStorage(firebaseApp);

// export { db, auth, storage };