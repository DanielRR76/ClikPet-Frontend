import { Route, Routes as ReactRoutes } from "react-router";
import { ROUTES } from "../../constants";

export function Routes() {
  const authenticatedRoutes = Object.values(ROUTES).filter(
    (route) => route.needsAuth,
  );
  const publicRoutes = Object.values(ROUTES).filter(
    (route) => !route.needsAuth,
  );
  return (
    <ReactRoutes>
      {publicRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      {authenticatedRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </ReactRoutes>
  );
}
