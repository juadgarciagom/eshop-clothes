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

// Function to get the user from firebase, CRUD methods only work in document reference and with the exists property we know if 
// snapshot exists and if that we created an user with the user authentication created
export const createUserProfileDocument = async (userAuth, additonalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additonalData
            })
        } catch (error) {
            console.log('Hay un error creando el usuario' , error.message);
        }
    }

    return userRef;

}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
//TODO Make the authentication with github

export default firebase;