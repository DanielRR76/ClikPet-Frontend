import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import type { AuthState } from "../types";

export function useAuthContext(): AuthState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }

  return context;
}
