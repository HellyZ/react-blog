import firebase from "firebase/app";
import database from "firebase/database";

const config = {
  apiKey: "AIzaSyA6Rsdh13A43El2qp7i8VUCaY4xkawTo2g",
  authDomain: "react-blog-be650.firebaseapp.com",
  databaseURL: "https://react-blog-be650.firebaseio.com",
  projectId: "react-blog-be650",
  storageBucket: "react-blog-be650.appspot.com",
  messagingSenderId: "820513517787",
  appId: "1:820513517787:web:2da2de41dfe5fbd9f6dcfe"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
