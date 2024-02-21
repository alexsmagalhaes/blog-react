import { ReactNode, createContext, useContext } from "react";

interface AuthProviderProps {
   children: any,
   value: any
}

const AuthContext = createContext<string | null>('');

export function AuthProvider({ children, value }: AuthProviderProps): ReactNode {
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}

export function useAuthValue() {
   return useContext(AuthContext);
}