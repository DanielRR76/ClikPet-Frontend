import { useMutationWrapper } from "@app";
import { useState } from "react";
import type { AddPetForm } from "../types";
import { petService } from "../services";
import { PATH, useNavigateWrapper } from "@router";
import { toast, useFormValidation, type FormErrors } from "@shared";
import { ADD_PET_VALIDATION_RULES } from "../constants";

export function useAddPet() {
  const [addPetForm, setAddPetForm] = useState<AddPetForm>({
    name: "",
    age: 0,
    weight: 0,
    color: "",
    images: null,
  });
  const [errors, setErrors] = useState<FormErrors<AddPetForm>>({});

  const { validate } = useFormValidation(addPetForm, ADD_PET_VALIDATION_RULES);
  const navigate = useNavigateWrapper();
  const { mutate: addPet } = useMutationWrapper({
    mutationFn: (data: AddPetForm) => petService.addPet(data),
    onSuccess: () => {
      navigate(PATH.MY_PETS);
    },
    onError: (response) => {
      toast.error(response.message);
    },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target;
    const { name, value } = target;
    if (name === "file-upload") {
      const fileInput = target as HTMLInputElement;

      setAddPetForm((prev) => ({
        ...prev,
        images: fileInput.files,
      }));
      return;
    }
    const isNumberField = name === "age" || name === "weight";
    setAddPetForm((prev) => ({
      ...prev,
      [name]: isNumberField ? Number(value) : value,
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
    addPet(addPetForm);
  };

  return {
    ...addPetForm,
    errors,
    handleChange,
    handleSubmit,
  };
}
