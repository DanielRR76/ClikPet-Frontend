import type { FormErrors, ValidationRule } from "../types";

export function useFormValidation<T extends object>(
  form: T,
  rules: ValidationRule<T>,
) {
  const validate = () => {
    const errors: FormErrors<T> = {};

    for (const key in rules) {
      const restriction = rules[key];
      const value = form[key];

      if ((restriction && !restriction.isValid(value)) || value === undefined) {
        errors[key] = true;
      }
    }

    const errorFields = Object.keys(errors) as (keyof T)[];
    const firstError = errorFields[0];
    const messageError = firstError ? rules[firstError]?.message : undefined;

    return {
      errors,
      hasErrors: errorFields.length > 0,
      messageError,
    };
  };

  return { validate };
}
