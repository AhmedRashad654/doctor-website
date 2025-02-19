import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import TranslateIcon from "@mui/icons-material/Translate";
import { getTranslations } from "next-intl/server";
export default async function LanguageDoctor({
  language,
}: {
  language: string[];
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
        <TranslateIcon />
        <Typography variant="h6">{t("Language")}</Typography>
      </Stack>
      {language.map((e: string, i: number) => (
        <Box
          sx={{
            borderRadius: "5px",
            padding: "5px 15px",
            backgroundColor: "backGround.main",
            color: "primary.main",
          }}
          key={i}
        >
          . {e}
        </Box>
      ))}
    </Stack>
  );
}
