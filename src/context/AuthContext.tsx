import { User } from "firebase/auth";
import { ReactNode, createContext, useContext } from "react";

export type userPatternProps = User | null | undefined

interface AuthProviderProps {
   children: ReactNode,
   value: userPatternProps
}

const AuthContext = createContext<userPatternProps>(undefined);

export function AuthProvider({ children, value }: AuthProviderProps): ReactNode {
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}

export function useAuthValue() {
   return useContext<userPatternProps>(AuthContext);
}