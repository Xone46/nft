import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyDgn6EXduFbkA667uWC45d_vobbbKyI_KY",

  authDomain: "nft-store-6138a.firebaseapp.com",

  projectId: "nft-store-6138a",

  storageBucket: "nft-store-6138a.appspot.com",

  messagingSenderId: "421474926866",

  appId: "1:421474926866:web:5505f69aaa095ee69d33cb",

  measurementId: "G-B2YS7K6F18"

};


const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();

