import { FormEvent, ReactNode, useEffect, useState } from "react";
import { RegisterStyled } from "./styles";
import { useAuthentication } from "@/hooks/useAuthentication";

export default function Register(): ReactNode {

   const [name, setName] = useState<string>('')
   const [email, setEmail] = useState<string>('')
   const [password, setPassword] = useState<string>('')
   const [repeatPassword, setRepeatPassword] = useState<string>('')

   const [error, setError] = useState<string | null>(null)

   //register hook
   const { createUser, error: authError } = useAuthentication();

   useEffect(() => {
      if (authError) setError(authError);
   }, [authError])

   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError(null)

      // const user = { name, email, password }

      if (password !== repeatPassword) {
         setError('Senhas diferentes')
      } else {
         // cadastrarUsuario('alexmag6282@gmail.com', '12345678');
         await createUser({ name, email, password });
         setError(authError)
      }
   }

   return (
      <RegisterStyled>
         <div className="container-medium">
            <h1>Cadastrar</h1>
            <form onSubmit={handleSubmit}>
               <label>
                  <span>Nome</span>
                  <input
                     type="text"
                     name="displayName"
                     required
                     placeholder="Nome do usuário"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </label>
               <label>
                  <span>Email</span>
                  <input
                     type="text"
                     name="displayEmail"
                     required
                     placeholder="Nome do usuário"
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     autoComplete="username"
                  />
               </label>
               <label>
                  <span>Senha</span>
                  <input
                     type="password"
                     name="displayPassword"
                     required
                     placeholder="Senha de login"
                     value={password}
                     onChange={(e) => setPassword(e.target.value)}
                     minLength={8}
                     autoComplete="new-password"
                  />
               </label>
               <label>
                  <span>Confirme a Senha</span>
                  <input
                     type="password"
                     name="displayConfirmPassword"
                     required
                     placeholder="Confirme a senha"
                     value={repeatPassword}
                     onChange={(e) => setRepeatPassword(e.target.value)}
                     minLength={8}
                     autoComplete="new-password"
                  />
               </label>

               <button>Cadastrar</button>
               {error && <span>{error}</span>}
            </form>
         </div>
      </RegisterStyled>
   )
}
