import { ReactNode } from "react";
import { FooterStyled } from "./styles";

export default function Footer(): ReactNode {
   return (
      <FooterStyled>
         <h2>Escreva sobre o que te interessa</h2>
         <span>Blog React &copy; • 2024</span>
      </FooterStyled>
   )
}