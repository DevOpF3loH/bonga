// import * as firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import "firebase/firestore";
// import "firebase/auth";

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVy3q2j7I2lzvMXadP2qx9xrKcln2KoOg",
  authDomain: "bonga-86f42.firebaseapp.com",
  projectId: "bonga-86f42",
  storageBucket: "bonga-86f42.appspot.com",
  messagingSenderId: "457193837928",
  appId: "1:457193837928:web:15df2051a8a2a087e332dd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
const db = getFirestore(app);

export { db, auth };
