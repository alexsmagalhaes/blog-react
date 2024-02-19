import styled from "styled-components";

export const ButtonStyled = styled.button`
         background-color: rgb(255, 255, 255);
         padding: 0.5rem 1rem;
         box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
         border-radius: 0.375rem;
         color: rgb(24, 24, 27);
         font-weight: 500;
         font-size: 0.875rem;
         border: solid 0.0625rem rgb(228, 228, 231);
         transition: all 250ms ease;
         height: 2.25rem;

            &.active{
               background-color: rgb(24, 24, 27);
               color: white;
               border: solid 0.0625rem rgb(24, 24, 27);
            }
`