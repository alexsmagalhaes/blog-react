import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Função para criar um novo usuário com e-mail e senha
export const cadastrarUsuario = async (email: string, senha: string) => {
   try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário cadastrado com sucesso:", user.email);
      // Você pode redirecionar o usuário para a próxima página ou realizar outras ações aqui
   } catch (error: any) {
      console.error("Erro ao cadastrar usuário:", error.message);
      // Trate o erro conforme necessário (exibindo uma mensagem de erro, etc.)
   }
};
