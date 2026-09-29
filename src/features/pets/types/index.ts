import type { User } from "@stores";

export type Pet = {
  id: number;
  name: string;
  age: number;
  weight: number;
  color: string;
  images: string[];
  available: boolean;
  adopterId?: number;
  owner: User;
};

export type AddPetForm = {
  name: string;
  age: number;
  weight: number;
  color: string;
  images: FileList | null;
};

export type EditPetForm = {
  id?: number;
  name?: string;
  age?: number;
  weight?: number;
  color?: string;
  images?: FileList | string[] | null;
};
