import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

//pages
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/404";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <NotFound/>,
      children: [
         {
            path: "/",
            element: <Home />
         }, {
            path: "/about",
            element: <About />
         },
      ]
   },
])