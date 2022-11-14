import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot, query, doc, getDocs } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = { 
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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