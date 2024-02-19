import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

//pages
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/404";
import Register from "@/pages/register";
import Login from "@/pages/login";

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <NotFound />,
      children: [
         {
            path: "/",
            element: <Home />
         }, {
            path: "/about",
            element: <About />
         },{
            path: "/register",
            element: <Register />
         },{
            path: "/login",
            element: <Login />
         },
      ]
   },
])