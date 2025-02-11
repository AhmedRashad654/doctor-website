import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import { getTranslations } from "next-intl/server";
export default async function Awards() {
     const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main" }}
        alignItems={"center"}
      >
        <NewReleasesIcon />
        <Typography variant="h6">{t("Awards")}</Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: "5px",
          padding: "5px 15px",
          backgroundColor: "backGround.main",
          color: "primary.main",
        }}
      >
        . Pediatrician of the Year 2019
      </Box>
    </Stack>
  );
}
