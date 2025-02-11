import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import { getTranslations } from "next-intl/server";
export default async function Education() {
     const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main" }}
        alignItems={"center"}
      >
        <SchoolIcon />
        <Typography variant="h6">{t("Education")}</Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: "5px",
          padding: "5px 15px",
          backgroundColor: "backGround.main",
          color: "primary.main",
        }}
      >
        . Dental care
      </Box>
    </Stack>
  );
}

