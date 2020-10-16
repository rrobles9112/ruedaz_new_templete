import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyCHeiRaevmNxxlMpkROmlGd-vbmgT-8LYY",
  authDomain: "ruedaz-co-dev.firebaseapp.com",
  databaseURL: "https://ruedaz-co-dev.firebaseio.com",
  projectId: "ruedaz-co-dev",
  storageBucket: "ruedaz-co-dev.appspot.com",
  messagingSenderId: "659813643071",
  appId: "1:659813643071:web:c06ceb7ac0bb787611d98a",
  measurementId: "G-9T5KE1RB15",
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const plansCollection = db.collection("plans");
const parkingsCollection = db.collection("parkings");

// export utils/refs
export { db, auth, plansCollection, parkingsCollection };
