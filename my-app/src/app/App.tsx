import { LayoutWrapper, Navbar, Container, Footer } from "../layouts";
import { Router, Routes } from "../router";
import ReactQueryProvider from "./providers/ReactQuery/context";
import { Toast } from "@shared";

export function App() {
  return (
    <Router>
      <ReactQueryProvider>
        <LayoutWrapper>
          <Navbar />
          <Container>
            <Toast />
            <Routes />
          </Container>
          <Footer />
        </LayoutWrapper>
      </ReactQueryProvider>
    </Router>
  );
}
