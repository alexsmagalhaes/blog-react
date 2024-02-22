import { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles"
import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

//firebase
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase/config";
import { getFirestore } from "firebase/firestore";
import { AuthProvider, userPatternProps } from "./context/AuthContext";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

function App() {

  const [user, setUser] = useState<userPatternProps>(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user: userPatternProps) => {
      setUser(user)
    })
  }, [auth])

  return (
    <AuthProvider value={user}>
      <GlobalStyles />
      <Navbar />
      <Outlet />
      <Footer />
    </AuthProvider>
  )
}

export default App
