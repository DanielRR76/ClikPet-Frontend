import type { Restriction } from "../types";

export const RADIUS_SIZE = {
  none: "0",
  small: "0.25rem",
  medium: "0.5rem",
  large: "0.75rem",
  "x-large": "1rem",
  full: "100%",
} as const;

export const NAME_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    typeof value === "string" && /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{3,}$/.test(value),
  message:
    "Por favor, insira um nome válido (apenas letras e espaços são permitidos e deve ter pelo menos 3 caracteres).",
};
export const EMAIL_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    typeof value === "string" &&
    /^[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*@[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*(\.[a-zA-Z]{2,})+$/.test(
      value,
    ),
  message:
    "Por favor, insira um endereço de e-mail válido (ex: nome@exemplo.com).",
};

export const PHONE_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    typeof value === "string" &&
    /^(1[1-9]|2[1-35-9]|3[1-5789]|4[1-24-9]|5[1-5]|6[1-69]|7[1-69]|8[1-9]|9[15689])9\d{8}$/.test(
      value,
    ),
  message:
    "Por favor, insira um número de telefone válido (ex: (XX) 9XXXX-XXXX).",
};

export const PASSWORD_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    typeof value === "string" &&
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])(?!.*(.)\1)[\S]{8,15}$/.test(
      value,
    ),
  message:
    "A senha deve ter entre 8 e 15 caracteres, incluindo pelo menos uma letra maiúscula, uma letra minúscula, um número, um caractere especial e não pode conter caracteres repetidos consecutivos.",
};

export const IMAGE_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    (value instanceof File && value.type.startsWith("image/")) ||
    (typeof value === "string" && /\.(png|jpe?g)$/i.test(value)) ||
    value instanceof FileList ||
    (value instanceof Array &&
      value.every(
        (item) => typeof item === "string" && /\.(png|jpe?g)$/i.test(item),
      )),
  message: "Por favor, insira um arquivo de imagem válido.",
};

export const IMAGES_RESTRICTION: Restriction = {
  isValid: (value: unknown) =>
    value instanceof FileList ||
    (value instanceof Array &&
      value.every(
        (item) => typeof item === "string" && /\.(png|jpe?g)$/i.test(item),
      )),
  message: "Por favor, insira pelo menos uma imagem.",
};
