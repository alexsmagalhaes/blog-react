import { createBrowserRouter } from "react-router-dom";
import App from "@/App";

//user
import { CheckRedirect } from "@/context/AuthContext";

//pages
import Home from "@/pages/home";
import About from "@/pages/about";
import NotFound from "@/pages/404";
import Register from "@/pages/register";
import Login from "@/pages/login";
import { CreatePost } from "@/pages/createPost";
import { Dashboard } from "@/pages/dashboard";

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
         }, {
            path: "/register",
            element:
               <CheckRedirect
                  children={<Register />}
                  redirectPath={"/"}
                  accessNotLogged
               />
         }, {
            path: "/login",
            element:
               <CheckRedirect
                  children={<Login />}
                  redirectPath={"/"}
                  accessNotLogged
               />
         }, {
            path: "/dashboard",
            element:
               <CheckRedirect
                  children={<Dashboard />}
                  redirectPath={"/"}
               />
         }, {
            path: "/posts/create",
            element:
               <CheckRedirect
                  children={<CreatePost />}
                  redirectPath={"/"}
               />
         },
      ]
   },
])

