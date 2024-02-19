import { ReactNode } from "react";
import { FooterStyled } from "./styles";

export default function Footer(): ReactNode {
   return (
      <FooterStyled>
         <div className="container-medium">
            <span>Blog React &copy; • 2024</span>
            <span>Escreva sobre o que te interessa.</span>
         </div>
      </FooterStyled>
   )
}