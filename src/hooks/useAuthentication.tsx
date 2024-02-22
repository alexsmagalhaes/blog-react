import { getAuth, createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useEffect, useState } from "react";

export function useAuthentication() {
   const [error, setError] = useState<string | null>(null)
   const [loading, setLoading] = useState<boolean | null>(null)

   //clean up
   const [cancelled, setCancelled] = useState(false)

   function checkIfIsCancelled() {
      if (cancelled) return;
   }

   const auth = getAuth();

   const createUser = async (data: any) => {
      checkIfIsCancelled();
      setLoading(true);

      try {
         const { user }: UserCredential = await createUserWithEmailAndPassword(
            auth,
            data.email,
            data.password
         )

         console.log("V2 - Usuário cadastrado com sucesso:", user.email);
         // await updateProfile(user, {
         //    displayName: data.name
         // })


         return user;

      } catch (error: any) {
         // console.error("V2 - Erro ao cadastrar usuário:", error.message);
         // console.log(typeof error.message)

         let systemErrorMessage: string = 'erro-set';

         if (error.code === 'auth/weak-password') {
            systemErrorMessage = 'Senha deve conter ao menos 6 caracteres';

         } else if (error.code === 'auth/email-already-in-use') {
            systemErrorMessage = 'E-Mail já cadastrado';

         } else {
            systemErrorMessage = 'Erro inesperado. Tente Novamente';
         }

         setError(systemErrorMessage);

      }
      setLoading(false);
   }

   useEffect(() => {
      setError(null)
      return () => setCancelled(true);
   }, [])

   return {
      auth,
      createUser,
      error,
      loading
   }
}

// export const cadastrarUsuario = async (email: string, senha: string) => {
//    try {
//       const auth = getAuth();
//       const userCredential = await createUserWithEmailAndPassword(auth, email, senha);

//       const user = userCredential.user;
//       console.log("Usuário cadastrado com sucesso:", user.email);

//    } catch (error: any) {
//       console.error("Erro ao cadastrar usuário:", error.message);
//    }
// };