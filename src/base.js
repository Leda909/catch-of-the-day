import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBP2vgHWpUzU06f-J4pIVR5Ifx6-vHn4-Y",
    authDomain: "my-fish-shopping-cart-project.firebaseapp.com",
    databaseURL: "https://my-fish-shopping-cart-project-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;