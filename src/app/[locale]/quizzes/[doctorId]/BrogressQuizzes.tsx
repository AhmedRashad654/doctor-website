import { Box, Stack, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function BrogressQuizzes({
  lengthQuestions,
  numberQuestion,
}: {
  numberQuestion: number;
  lengthQuestions: number;
}) {
  const t = useTranslations("quizzes");
  const progressWidth = ((numberQuestion + 1) / lengthQuestions) * 100;
  return (
    <Stack spacing={1}>
      <Typography variant="h5" sx={{ color: "primary.main" }}>
        {t("Quizzes")}
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "25px",
          backgroundColor: "backGround.main",
        }}
      >
        <Box
          sx={{
            width: `${progressWidth}%`,
            height: "25px",
            backgroundColor: "primary.main",
          }}
        ></Box>
      </Box>
    </Stack>
  );
}
