"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { Button, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import Question from "./Question";
import Answers from "./Answers";
import { IQuizz } from "@/constants/Types";
import FinishQuizzes from "./FinishQuizzes";
import useShowText from "@/components/Shared/useShowText";
import { solveQuizz } from "@/services/api/solveQuizz";

export default function QuizzesSection({
  quizz,
  numberQuestion,
  setNumberQuestion,
}: {
  numberQuestion: number;
  setNumberQuestion: Dispatch<SetStateAction<number>>;
  quizz: IQuizz;
}) {
  const t = useTranslations("quizzes");
  const [showFinishQuizzes, setShowFinishQuizzes] = useState<boolean>(false);
  const [answers, setAnswers] = useState<number[] | []>([]);
  const showText = useShowText();
  // handle next question and finish
  async function handleNextQuestion() {
    if (answers?.length <= numberQuestion)
      return showText("you must answer in this questions");
    if (numberQuestion + 1 !== quizz?.questions?.length) {
      setNumberQuestion((e: number) => e + 1);
    } else {
      const response = await solveQuizz(quizz?._id, answers);
      if (response?.status === true) {
        setShowFinishQuizzes(true);
      } else {
        showText("Error happened");
      }
    }
  }
  return (
    <Stack direction={"column"} spacing={2} marginTop={"20px"}>
      <Question Question={quizz?.questions[numberQuestion]?.question} />
      <Answers
        options={quizz?.questions[numberQuestion]?.options}
        setAnswers={setAnswers}
        answers={answers}
        numberQuestion={numberQuestion}
      />
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
          onClick={handleNextQuestion}
        >
          {numberQuestion + 1 === quizz?.questions?.length
            ? t("Finish")
            : t("Next")}
        </Button>
      </Stack>
      <FinishQuizzes
        showFinishQuizzes={showFinishQuizzes}
        setShowFinishQuizzes={setShowFinishQuizzes}
      />
    </Stack>
  );
}
