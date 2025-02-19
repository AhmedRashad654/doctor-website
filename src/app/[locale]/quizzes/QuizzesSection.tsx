"use client";
import React, { useContext, useEffect, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { ContextQuestion } from "../../../../context/ContextQuestion";
import Question from "./Question";
import Answers from "./Answers";
import { FakeQuestionType } from "@/constants/Types";
import { FakeQuestion } from "@/constants/ِArrays";
import FinishQuizzes from "./FinishQuizzes";

export default function QuizzesSection() {
  const t = useTranslations("quizzes");
  const context = useContext(ContextQuestion);
  if (!context) {
    throw new Error("Context Not Found");
  }
  const { numberQuestion, setNumberQuestion } = context;
  const [Questions, setQuestions] = useState<FakeQuestionType>();
  const [showFinishQuizzes, setShowFinishQuizzes] = useState<boolean>(false);

  useEffect(() => {
    const currentQuestion = FakeQuestion.find(
      (e, i) => i === numberQuestion - 1
    );
    setQuestions(currentQuestion);
  }, [numberQuestion]);

  return (
    <Stack direction={"column"} spacing={2} marginTop={"20px"}>
      <Question Question={Questions?.question} />
      <Answers answers={Questions?.answers} />
      <Stack alignItems={"center"}>
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            marginY: "20px",
            borderRadius: "5px",
            width: "220px",
            padding: "10px",
            fontWeight: "semibold",
            fontSize: "1.1rem",
            letterSpaccing: "2px",
            textTransform: "none",
          }}
          onClick={() =>
            numberQuestion !== 4
              ? setNumberQuestion((e: number) => e + 1)
              : setShowFinishQuizzes(true)
          }
        >
          {numberQuestion === 4 ? t("Finish") : t("Next")}
        </Button>
      </Stack>
      <FinishQuizzes showFinishQuizzes={showFinishQuizzes} />
    </Stack>
  );
}
