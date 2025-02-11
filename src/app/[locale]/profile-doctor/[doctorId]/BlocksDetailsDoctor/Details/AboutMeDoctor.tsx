import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Person4Icon from "@mui/icons-material/Person4";
import { getTranslations } from "next-intl/server";
export default async function AboutMeDoctor() {
   const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main", gap: "7px" }}
        alignItems={"center"}
      >
        <Person4Icon />
        <Typography variant="h6">{t("About Me")}</Typography>
      </Stack>
      <Box
        sx={{
          borderRadius: "5px",
          padding: "5px 15px",
          backgroundColor: "backGround.main",
          color: "primary.main",
        }}
      >
        Compassionate pediatrician with a focus on providing holistic care for
        childern and adolescents
      </Box>
    </Stack>
  );
}
