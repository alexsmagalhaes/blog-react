import { GlobalStyles } from "./GlobalStyles"
import { Outlet } from "react-router-dom"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

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
