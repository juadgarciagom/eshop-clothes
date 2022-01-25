import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
    apiKey: "AIzaSyBTyG6ytiIQrKGiD8IhqkrnKqX3vw_E6uI",
    authDomain: "clothes-db-e4c51.firebaseapp.com",
    projectId: "clothes-db-e4c51",
    storageBucket: "clothes-db-e4c51.appspot.com",
    messagingSenderId: "304195381200",
    appId: "1:304195381200:web:ff432ddeb46dd5e7b73bd5",
    measurementId: "G-3YSB0PPRDH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//TODO Make the authentication with github

export default firebase;