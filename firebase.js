import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, doc, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBzPtsLylRN0r17C8XywaYVssgbB99XCQs",
  authDomain: "what2watch-40e6b.firebaseapp.com",
  projectId: "what2watch-40e6b",
  storageBucket: "what2watch-40e6b.appspot.com",
  messagingSenderId: "379782782889",
  appId: "1:379782782889:web:09fb2e8adc39f36b5baeb8"
};

initializeApp(firebaseConfig);
const firestore = getFirestore()
const MOVIES = 'movies'
const SERIES = 'series'

export {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    collection,
    onSnapshot,
    query,
    doc,
    getDocs,
    MOVIES,
    SERIES,
    firestore,
};