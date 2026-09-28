export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  image?: string;
};

export type AuthState = {
  isAuthenticated: boolean;
  user?: User;
  isLoading: boolean;
  setUser: (user?: User) => void;
  clearAuthState: () => void;
};
