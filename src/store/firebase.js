import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";


const app = firebase.initializeApp({
    apiKey: "AIzaSyCg0Es8NdfVSpIPasAkqaztDWE5pu-tXF0",
    authDomain: "products-store-8ebd5.firebaseapp.com",
    projectId: "products-store-8ebd5",
    storageBucket: "products-store-8ebd5.appspot.com",
    messagingSenderId: "638324835822",
    appId: "1:638324835822:web:551640b0dec057406a3aff",
    measurementId: "G-H1CL9N54RV"

});

export const auth = app.auth();
export const db = app.firestore();
export const functions = app.functions();
export const storage = firebase.storage()

export default app;
