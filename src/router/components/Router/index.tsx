import { BrowserRouter } from "react-router";

export function Router({ children }: { children?: React.ReactNode }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}
