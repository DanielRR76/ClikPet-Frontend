import { useMutationWrapper } from "@app";
import { authService } from "../services";
import { useState } from "react";
import type { LoginForm } from "../types";
import { useAuthContext } from "@stores";
import { PATH, useNavigateWrapper } from "@router";
import { toast, useFormValidation, type FormErrors } from "@shared";
import { LOGIN_VALIDATION_RULES } from "../constants";

export function useLogin() {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors<LoginForm>>({});

  const { validate } = useFormValidation(loginForm, LOGIN_VALIDATION_RULES);
  const { setUser } = useAuthContext();
  const navigate = useNavigateWrapper();
  const { mutate: login } = useMutationWrapper({
    mutationFn: (data: LoginForm) => authService.login(data),
    onSuccess: (response) => {
      setUser(response.payload);
      navigate(PATH.HOME);
    },
    onError: (response) => {
      toast.error(response.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    const { errors, hasErrors, messageError } = validate();

    if (hasErrors) {
      setErrors(errors);
      if (messageError) toast.error(messageError);
      return;
    }

    login(loginForm);
  };

  return {
    ...loginForm,
    errors,
    handleChange,
    handleSubmit,
  };
}
