import { GlobalStyles } from "./GlobalStyles"
import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

//firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {

  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
