import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import { getTranslations } from "next-intl/server";
export default async function ServicesDoctor() {
   const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main", gap: "7px" }}
        alignItems={"center"}
      >
        <VaccinesIcon />
        <Typography variant="h6">{t("Services")}</Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: "5px",
          padding: "5px 15px",
          backgroundColor: "backGround.main",
          color: "primary.main",
        }}
      >
        . pediatrics
      </Box>
    </Stack>
  );
}

