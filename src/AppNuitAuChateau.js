import { customTheme } from "./themes/theme.ts";
import "./App.css";
import Hero from "./components/Hero";
import { ThemeProvider, CssBaseline, Table } from "@mui/material";

function AppNuitAuChateau() {
  return (
    <div className="AppNuitAuChateau">
      <ThemeProvider theme={customTheme}>
        <CssBaseline enableColorScheme />
        <Table>Helo</Table>
      </ThemeProvider>
    </div>
  );
}

export default AppNuitAuChateau;
