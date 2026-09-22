import {
  PetsPage,
  MyAdoptionsPage,
  MyPetsPage,
  PetDetailsPage,
  AddPetPage,
  EditPetPage,
  ProfilePage,
  LoginPage,
  RegisterPage,
} from "@features";

export const PATH = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PROFILE: "/user/profile",
  MY_PETS: "/pet/mypets",
  MY_ADOPTIONS: "/pet/myadoptions",
  ADD_PET: "/pet/add",
  PET_DETAILS: (id?: number) => `/pet/${id ?? ":id"}`,
  EDIT_PET: (id?: number) => `/pet/edit/${id ?? ":id"}`,
} as const;

export const ROUTES = {
  HOME: {
    path: PATH.HOME,
    element: <PetsPage />,
    needsAuth: false,
  },
  LOGIN: {
    path: PATH.LOGIN,
    element: <LoginPage />,
    needsAuth: false,
  },
  REGISTER: {
    path: PATH.REGISTER,
    element: <RegisterPage />,
    needsAuth: false,
  },
  PROFILE: {
    path: PATH.PROFILE,
    element: <ProfilePage />,
    needsAuth: true,
  },
  MY_PETS: {
    path: PATH.MY_PETS,
    element: <MyPetsPage />,
    needsAuth: true,
  },
  MY_ADOPTIONS: {
    path: PATH.MY_ADOPTIONS,
    element: <MyAdoptionsPage />,
    needsAuth: true,
  },
  ADD_PET: {
    path: PATH.ADD_PET,
    element: <AddPetPage />,
    needsAuth: true,
  },
  PET_DETAILS: {
    path: PATH.PET_DETAILS(),
    element: <PetDetailsPage />,
    needsAuth: false,
  },
  EDIT_PET: {
    path: PATH.EDIT_PET(),
    element: <EditPetPage />,
    needsAuth: true,
  },
} as const;
