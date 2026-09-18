import {
  Home,
  MyAdoptions,
  MyPets,
  PetDetails,
  AddPet,
  EditPet,
  Profile,
  Login,
  Register,
} from "../../pages";

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
    element: <Home />,
    needsAuth: false,
  },
  LOGIN: {
    path: PATH.LOGIN,
    element: <Login />,
    needsAuth: false,
  },
  REGISTER: {
    path: PATH.REGISTER,
    element: <Register />,
    needsAuth: false,
  },
  PROFILE: {
    path: PATH.PROFILE,
    element: <Profile />,
    needsAuth: true,
  },
  MY_PETS: {
    path: PATH.MY_PETS,
    element: <MyPets />,
    needsAuth: true,
  },
  MY_ADOPTIONS: {
    path: PATH.MY_ADOPTIONS,
    element: <MyAdoptions />,
    needsAuth: true,
  },
  ADD_PET: {
    path: PATH.ADD_PET,
    element: <AddPet />,
    needsAuth: true,
  },
  PET_DETAILS: {
    path: PATH.PET_DETAILS(),
    element: <PetDetails />,
    needsAuth: false,
  },
  EDIT_PET: {
    path: PATH.EDIT_PET(),
    element: <EditPet />,
    needsAuth: true,
  },
} as const;
