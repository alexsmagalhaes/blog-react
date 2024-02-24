import { User } from "firebase/auth";
import { ReactNode, createContext, useContext } from "react";
import { Navigate } from "react-router-dom";

export type userPatternProps = User | null | undefined | string

interface AuthProviderProps {
   children: ReactNode,
   value: userPatternProps
}

interface CheckRedirectProps {
   children: ReactNode,
   redirectPath: string,
   accessNotLogged?: boolean
}

const AuthContext = createContext<userPatternProps>(undefined);

export function AuthProvider({ children, value }: AuthProviderProps): ReactNode {
   return (
      <AuthContext.Provider value={value}>
         {children}
      </AuthContext.Provider>
   )
}

// Fast way to get user logged informations
export function useAuthValue() {
   return useContext<userPatternProps>(AuthContext);
}

//Check if user is logged and can access the required page, 
//if neither we redirect to a alternalive path
export function CheckRedirect({ children, redirectPath, accessNotLogged }: CheckRedirectProps): ReactNode {
   const user = useAuthValue();
   if (accessNotLogged === true) return children
   return !user ? <Navigate to={redirectPath} /> : children
}; 