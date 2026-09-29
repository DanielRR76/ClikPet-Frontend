import { capitalize } from "@shared";

export const formatAge = (age?: number) => {
  if (!age) return "Não informado";
  return age === 1 ? `${age} ano` : `${age} anos`;
};

export const formatWeight = (weight?: number) => {
  if (!weight) return "Não informado";
  return `${weight} kg`;
};

export const standardizeText = (text?: string) => {
  if (!text) return "Não informado";
  return capitalize(text);
};
