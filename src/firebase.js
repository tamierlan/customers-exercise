import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABQaCdf09CTO1uYEd7Ohw5t2La3hbxDdk",
  authDomain: "customer-f071a.firebaseapp.com",
  projectId: "customer-f071a",
  storageBucket: "customer-f071a.appspot.com",
  messagingSenderId: "591466409732",
  appId: "1:591466409732:web:75b71360b03f1ff0aaea51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


export function register(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}


export function logout() {
  return signOut(auth);
}


export function useAuth() {
  const [ currentCustomer, setCurrentCustomer ] = useState();
  useEffect((() => {
    const unSubscribe = onAuthStateChanged(auth, customer => setCurrentCustomer(customer));
    return unSubscribe;
  }), [])
  return currentCustomer;
}