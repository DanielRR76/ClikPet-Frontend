import { useMutationWrapper } from "@app";
import { authService } from "../services";
import { useState } from "react";
import type { RegisterForm } from "../types";
import { useAuthContext } from "@stores";
import { PATH, useNavigateWrapper } from "@router";
import { toast, useFormValidation, type FormErrors } from "@shared";
import { REGISTER_VALIDATION_RULES } from "../constants";

export function useRegister() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors<RegisterForm>>({});

  const { validate } = useFormValidation(
    registerForm,
    REGISTER_VALIDATION_RULES,
  );
  const { setUser } = useAuthContext();
  const navigate = useNavigateWrapper();
  const { mutate: register } = useMutationWrapper({
    mutationFn: (data: RegisterForm) => authService.register(data),
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
    setRegisterForm((prev) => ({
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
    register(registerForm);
  };

  return {
    ...registerForm,
    errors,
    handleChange,
    handleSubmit,
  };
}
