import { ThemeProvider } from "@emotion/react";
import { ColorModeContext, useMode } from "./theme/theme";
import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Bar from "./pages/bar";
import Pie from "./pages/pie";
import Line from "./pages/line";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import Calendar from "./pages/calendar";
import Layout from "./components/global/Layout";

function App() {

  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/form" element={<Form />} />
            <Route path="/bar" element={<Bar />} />
            <Route path="/pie" element={<Pie />} />
            <Route path="/line" element={<Line />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
