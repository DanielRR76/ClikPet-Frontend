import { useParams } from "react-router";

export function useParamsWrapper() {
  const params = useParams();
  return params;
}
