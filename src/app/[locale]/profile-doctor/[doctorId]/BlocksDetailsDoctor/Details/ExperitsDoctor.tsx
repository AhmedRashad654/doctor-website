import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import { getTranslations } from "next-intl/server";
export default async function ExperitsDoctor({
  expertise,
}: {
  expertise: string[];
}) {
  const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main", gap: "7px" }}
        alignItems={"center"}
      >
        <WbIncandescentIcon />
        <Typography variant="h6">{t("Expertise")}</Typography>
      </Stack>
      {expertise.map((item: string, i: number) => (
        <Box
          key={i}
          sx={{
            borderRadius: "5px",
            padding: "5px 15px",
            backgroundColor: "backGround.main",
            color: "primary.main",
          }}
        >
          . {item}
        </Box>
      ))}
    </Stack>
  );
}
