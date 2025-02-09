import { Box, Container, Typography } from "@mui/material";
import SearchPart from "./SearchPart";
import { getLocale, getTranslations } from "next-intl/server";
export default async function HeroSection() {
  const t = await getTranslations("HomePage.heroSection");
  const locale = await getLocale();
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        backgroundImage: "url('assets/images/header-image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(10, 69, 111, 0.5)",
        },
      }}
    >
      <Container sx={{ zIndex: "5" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "4rem" },
            "&::first-letter": {
              color: locale === "en" ? "primary.main" : "",
              fontSize: { xs: "2.5rem", md: "5rem" },
            },
          }}
        >
          {t("First")}
        </Typography>
        <Typography
          variant="h4"
          sx={{ mt: "5px", color: "black", fontStyle: "italic" }}
        >
          {t("Second")}
        </Typography>
        <SearchPart />
      </Container>
    </Box>
  );
}
