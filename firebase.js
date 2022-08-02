// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA38P0BChqFQtkhP544JqfqfwXgGcyWjFA",
  authDomain: "reactnativeapp-e554f.firebaseapp.com",
  projectId: "reactnativeapp-e554f",
  storageBucket: "reactnativeapp-e554f.appspot.com",
  messagingSenderId: "717761093827",
  appId: "1:717761093827:web:63912d9d7f0e3e24c10276",
};

// Initialize Firebase
let app;
if (firebase.app.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const { auth } = firebase.auth();

export { auth };
