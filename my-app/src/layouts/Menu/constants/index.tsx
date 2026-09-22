import { PATH } from "@router";
import type { IconName } from "@shared";

export const authenticatedOptions: {
  path: string;
  icon: IconName;
  label: string;
}[] = [
  {
    path: PATH.MY_PETS,
    icon: "myPets",
    label: "Meus pets",
  },
  {
    path: PATH.MY_ADOPTIONS,
    icon: "myAdoptions",
    label: "Minhas adoções",
  },
  {
    path: PATH.PROFILE,
    icon: "profile",
    label: "Perfil",
  },
];
