import { ReactNode } from "react";
import { NavbarStyled } from "./styles";
import { NavLink } from "react-router-dom";

export default function Navbar(): ReactNode {
   return (
      <NavbarStyled>
         <NavLink to={"/"}>Blog React</NavLink>
         <ul>
            <li><NavLink to={"/"}>Home/ Início</NavLink></li>
            <li><NavLink to={"/about"}>Sobre</NavLink></li>
         </ul>
      </NavbarStyled>
   )
}