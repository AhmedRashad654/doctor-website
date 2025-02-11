import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getTranslations } from "next-intl/server";
export default async function Addres() {
   const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main" }}
        alignItems={"center"}
      >
        <LocationOnIcon />
        <Typography variant="h6">{t("Services Location")}</Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: "5px",
          padding: "5px 15px",
          backgroundColor: "backGround.main",
          color: "primary.main",
        }}
      >
        . Brown Pediatric Clinic 789 High St, London
      </Box>
    </Stack>
  );
}

