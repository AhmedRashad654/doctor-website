import { Container } from "@mui/material";
import React from "react";
import BrogressQuizzes from "./BrogressQuizzes";
import QuizzesSection from "./QuizzesSection";

export default function Quizzes() {
  return (
    <Container sx={{ paddingY: "40px" }}>
      <BrogressQuizzes />
      <QuizzesSection />
    </Container>
  );
}
