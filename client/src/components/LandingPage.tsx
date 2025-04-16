// src/components/LandingPage.tsx
import { Container, Typography, Button, Box } from "@mui/material";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AppTheme from "../theme/AppTheme"; // Your custom theme
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <ThemeProvider theme={AppTheme}>
      <CssBaseline />
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        />

        {/* Content */}
        <Container
          sx={{
            position: "relative",
            zIndex: 2,
            padding: { xs: "2rem 1rem", md: "4rem" },
          }}
        >
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "2.5rem", sm: "3rem", md: "4rem" },
              mb: 2,
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            }}
          >
            Explore the World with Us
          </Typography>
          <Typography
            variant="h5"
            sx={{
              maxWidth: "700px",
              margin: "0 auto",
              mb: 4,
              fontSize: { xs: "1.2rem", md: "1.5rem" },
              textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
            }}
          >
            Your gateway to unforgettable travel experiences. Discover
            destinations, book your next adventure, and make memories that last
            a lifetime.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/signup"
            sx={{
              padding: "12px 32px",
              fontSize: "1rem",
              borderRadius: "30px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
              textTransform: "uppercase",
            }}
          >
            Start Exploring
          </Button>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
