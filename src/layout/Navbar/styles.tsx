import styled from "styled-components";

export const NavbarStyled = styled.nav`
   padding: 1rem 0;
   background-color: white;
   box-shadow: 0 1.25rem 1.5625rem -0.3125rem rgb(0 0 0 / 0.05), 0 0.5rem 0.625rem -0.375rem rgb(0 0 0 / 0.05);
   position: sticky;
   top: 0;
   right: 0;
   left: 0;

   .container-medium {
      display: flex;
      gap: 3rem;
      align-items: center;
      justify-content: space-between;

      .nav_logo-link {
         font-size: 1.25rem;
         font-weight: 500;
      }

      ul{
         display: flex;
         gap: 1rem;
         align-items: center;

         a {
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
         }
      }
   }
`