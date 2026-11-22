import { createTheme } from "@mui/material/styles";

// `cssVariables` makes MUI emit its theme as `--mui-*` CSS variables.
// The SurveyJS MUI adapter reads those variables, so this flag is required.
export const theme = createTheme({
  cssVariables: { colorSchemeSelector: "class" },
  colorSchemes: {
    light: { palette: { primary: { main: "#1565c0" } } },
    dark: { palette: { primary: { main: "#90caf9" } } },
  },
  shape: { borderRadius: 10 },
  typography: { fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, sans-serif" },
});
