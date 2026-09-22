export type AuthUser = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image?: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user?: AuthUser;
  isLoading: boolean;
  setUser: (user?: AuthUser) => void;
  clearAuthState: () => void;
};
