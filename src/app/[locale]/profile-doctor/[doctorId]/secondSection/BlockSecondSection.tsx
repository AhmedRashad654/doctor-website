import { Box, IconButton, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import { JSX } from "react";

export default async function BlockSecondSection({
  icon,
  header,
  text,
}: {
  icon: JSX.Element;
  header: string;
  text: string;
}) {
  const t = await getTranslations("profileDoctor");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          backgroundColor: "backGround.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton>{icon}</IconButton>
      </Box>

      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", color: "primary.main", letterSpacing: "2px",marginBottom:"-5px" }}
      >
        {header}{t("Year")}
      </Typography>
      <Typography variant="body1" sx={{ color: "primary.main" }}>
        {t(text)}
      </Typography>
    </Box>
  );
}
