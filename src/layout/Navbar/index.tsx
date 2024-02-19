import { ReactNode } from "react";
import { NavbarStyled } from "./styles";
import { NavLink } from "react-router-dom";

export default function Navbar(): ReactNode {
   return (
      <NavbarStyled>
         <div className="container-medium">
            <NavLink to={"/"} className="nav_logo-link">Blog React</NavLink>
            <ul>
               <li><NavLink to={"/"}>Home/ Início</NavLink></li>
               <li><NavLink to={"/about"}>Sobre</NavLink></li>
               <li><NavLink to={"/login"}>Login</NavLink></li>
               <li><NavLink to={"/register"}>Cadastrar</NavLink></li>
            </ul>
         </div>
      </NavbarStyled>
   )
}