import { GlobalStyles } from "./GlobalStyles"
import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

//firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { getFirestore } from "firebase/firestore";
import { AuthProvider } from "./context/AuthContext";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {

  return (
    <AuthProvider value={''}>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  )
}

export default App
