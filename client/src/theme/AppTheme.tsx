// src/theme/AppTheme.tsx
import { createTheme } from "@mui/material/styles";

// Define your custom theme here
const AppTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Custom primary color
    },
    secondary: {
      main: "#dc004e", // Custom secondary color
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Customize typography
  },
});

export default AppTheme;
