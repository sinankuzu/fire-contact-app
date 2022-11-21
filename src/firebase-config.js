import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBngi2yX1S__vnsF7FFDwb9BmGoxBJT_ko",
  authDomain: "fire-contact-app-427ea.firebaseapp.com",
  projectId: "fire-contact-app-427ea",
  databaseURL:"https://fire-contact-app-427ea-default-rtdb.europe-west1.firebasedatabase.app",
  storageBucket: "fire-contact-app-427ea.appspot.com",
  messagingSenderId: "643787975026",
  appId: "1:643787975026:web:4dcfb87590743112bd55eb",
  measurementId: "G-ZME37791X0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

