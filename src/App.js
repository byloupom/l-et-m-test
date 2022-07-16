import { customTheme } from "./themes/theme.ts";
import "./App.css";
import { ThemeProvider, CssBaseline, Container } from "@mui/material";
import Hero from "./components/Hero";

import { Routes, Route, Link } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Dormir from "./components/Dormir/Dormir";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        <Link to="/l-et-m" style={{ textDecoration: "none" }}>
          <Hero />
        </Link>
        <Container maxWidth="md">
          <Routes>
            <Route path="/l-et-m" element={<Accueil />} />
            <Route path="/l-et-m/dormir" element={<Dormir />} />
            <Route path="*" element={<h1>Page not found.</h1>} />
          </Routes>
        </Container>
      </ThemeProvider>
    </div>
  );
}
export default App;
