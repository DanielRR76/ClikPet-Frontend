import { useMutationWrapper } from "@app";
import { useEffect, useState } from "react";
import type { EditPetForm } from "../types";
import { petService } from "../services";
import { PATH, useNavigateWrapper, useParamsWrapper } from "@router";
import { toast, useFormValidation, type FormErrors } from "@shared";
import { EDIT_PET_VALIDATION_RULES } from "../constants";
import { useGetPetById } from "./useGetPetById";

export function useEditPet() {
  const { id } = useParamsWrapper();
  const { data, isLoading, isError, error } = useGetPetById(Number(id));
  const [editPetForm, setEditPetForm] = useState<EditPetForm>({});
  const pet = data?.payload;
  const [errors, setErrors] = useState<FormErrors<EditPetForm>>({});

  const { validate } = useFormValidation(
    editPetForm,
    EDIT_PET_VALIDATION_RULES,
  );
  const navigate = useNavigateWrapper();
  const { mutate: editPet } = useMutationWrapper({
    mutationFn: (data: EditPetForm) => petService.editPet(data),
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

      setEditPetForm((prev) => ({
        ...prev,
        images: fileInput.files,
      }));
      return;
    }
    const isNumberField = name === "age" || name === "weight";
    setEditPetForm((prev) => ({
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
    if (!id) return;
    editPet({ ...editPetForm, id: Number(id) });
  };

  useEffect(() => {
    if (data) {
      setEditPetForm({
        name: pet?.name,
        age: pet?.age,
        weight: pet?.weight,
        color: pet?.color,
        images: pet?.images,
      });
    }
  }, [data]);

  const isPetFormEqualToPet = () => {
    if (
      editPetForm.name === pet?.name &&
      editPetForm.age === pet?.age &&
      editPetForm.weight === pet?.weight &&
      editPetForm.color === pet?.color &&
      editPetForm.images === pet?.images
    ) {
      return true;
    }
    return false;
  };

  return {
    name: editPetForm.name,
    age: editPetForm.age,
    weight: editPetForm.weight,
    color: editPetForm.color,
    images:
      editPetForm.images instanceof FileList
        ? Array.from(editPetForm.images)
        : (editPetForm.images ?? []),
    errors,
    isLoading,
    isError,
    error,
    handleChange,
    handleSubmit,
    isPetFormEqualToPet,
  };
}
