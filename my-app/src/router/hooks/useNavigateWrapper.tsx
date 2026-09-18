import { useNavigate } from "react-router";

export const useNavigateWrapper = () => {
  const navigate = useNavigate();
  return navigate;
};
