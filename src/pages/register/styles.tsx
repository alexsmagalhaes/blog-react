import styled from "styled-components";

export const RegisterStyled = styled.div`
   form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      label {
         display: flex;
         flex-direction: column;
         width: 100%;
         gap: .25rem;

         input {
            width: 100%;
            font-size: 1rem;
         }
      }
   }
`