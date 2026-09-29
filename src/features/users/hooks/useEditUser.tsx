import { useMutationWrapper } from "@app";
import { userService } from "../services";
import { useEffect, useState } from "react";
import type { EditUserForm } from "../types";
import { useAuthContext } from "@stores";
import { toast, useFormValidation, type FormErrors } from "@shared";
import { EDIT_USER_VALIDATION_RULES } from "../constants";

export function useEditUser() {
  const { user, setUser } = useAuthContext();
  const [editUserForm, setEditUserForm] = useState<EditUserForm>({
    name: user?.name,
    image: user?.image,
    phone: user?.phone,
    email: user?.email || "",
  });
  const [errors, setErrors] = useState<FormErrors<EditUserForm>>({});

  const { validate } = useFormValidation(
    editUserForm,
    EDIT_USER_VALIDATION_RULES,
  );
  const { mutate: editUser } = useMutationWrapper({
    mutationFn: (data: EditUserForm) => userService.editUser(data),
    onSuccess: (response) => {
      setUser(response.payload);
    },
    onError: (response) => {
      toast.error(response.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "file-upload") {
      setEditUserForm((prev) => ({
        ...prev,
        image: e.target.files?.[0] || undefined,
      }));
      return;
    }
    setEditUserForm((prev) => ({
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
    editUser(editUserForm);
  };

  useEffect(() => {
    if (user) {
      setEditUserForm({
        name: user.name,
        image: user.image,
        phone: user.phone,
        email: user.email,
      });
    }
  }, [user]);

  return {
    ...editUserForm,
    errors,
    handleChange,
    handleSubmit,
  };
}
