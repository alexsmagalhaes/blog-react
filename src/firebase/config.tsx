import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyD9ipnGG6y8tJbZUKReLgEtuzjbwlUE6Fw",
   authDomain: "blog-react-01.firebaseapp.com",
   projectId: "blog-react-01",
   storageBucket: "blog-react-01.appspot.com",
   messagingSenderId: "591467900873",
   appId: "1:591467900873:web:6dd0a6294a2a312b9dc218"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

