import { AuthContext } from "./AuthContext";
import { useAuth } from "./hook/useAuth";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const authState = useAuth();

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
}
