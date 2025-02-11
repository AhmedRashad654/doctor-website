import { Stack, Typography } from "@mui/material";
import React from "react";
import question from "../../../../public/assets/images/quizzes.png";
import Image from "next/image";
export default function Question({ Question }: { Question: string|undefined }) {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      alignItems={"center"}
      sx={{
        padding: "25px",
        borderRadius: "25px",
        backgroundColor: "backGround.main",
        border: "1px solid #0a456f",
      }}
    >
      <Image src={question} alt="question" className="w-[120px]" />
      <Typography variant="h6" sx={{ color: "primary.main" }}>
        {Question}
      </Typography>
    </Stack>
  );
}
