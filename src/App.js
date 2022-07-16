import { customTheme } from "./themes/theme.ts";
import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider, CssBaseline } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        <Hero />
      </ThemeProvider>
    </div>
  );
}

export default App;