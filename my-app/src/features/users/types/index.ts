export type EditUserForm = {
  name?: string;
  image?: string | File;
  email: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
};
