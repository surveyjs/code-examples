import { lazy, Suspense, useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useColorScheme } from "@mui/material/styles";

// Each approach is a separate lazy chunk, so `vite build` reports its bundle cost.
const SurveyJsIntake = lazy(() => import("./surveyjs/SurveyJsIntake"));
const RhfIntake = lazy(() => import("./rhf/RhfIntake"));

type Approach = "surveyjs" | "rhf";
const fromHash = (): Approach => (location.hash === "#rhf" ? "rhf" : "surveyjs");

export default function App() {
  const [approach, setApproach] = useState<Approach>(fromHash);
  const { mode, systemMode, setMode } = useColorScheme();
  const isDark = (mode === "system" ? systemMode : mode) === "dark";

  useEffect(() => {
    const onHash = () => setApproach(fromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Clinic Portal
          </Typography>
          <Button color="inherit" onClick={() => setMode(isDark ? "light" : "dark")}>
            {isDark ? "Light mode" : "Dark mode"}
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 3 }}>
        <Tabs
          value={approach}
          onChange={(_, v: Approach) => (location.hash = v)}
          sx={{ mb: 2 }}
        >
          <Tab value="surveyjs" label="SurveyJS + MUI adapter" />
          <Tab value="rhf" label="react-hook-form + Zod" />
        </Tabs>
        <Paper variant="outlined">
          <Suspense fallback={<Box sx={{ p: 2 }}>Loading…</Box>}>
            {approach === "surveyjs" ? <SurveyJsIntake /> : <RhfIntake />}
          </Suspense>
        </Paper>
      </Container>
    </>
  );
}
