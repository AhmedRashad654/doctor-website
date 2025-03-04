"use client";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import BrogressQuizzes from "./BrogressQuizzes";
import QuizzesSection from "./QuizzesSection";
import { request } from "@/axios/axios";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import NotFoundData from "@/components/Shared/NotFoundData";
import notFound from "../../../../../public/assets/images/not-found.png";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useAppDispatch } from "@/redux/hooks";
import { setInitialState } from "@/redux/features/stepsBookingSlice";
export default function Quizzes() {
  const { doctorId } = useParams();
  const [numberQuestion, setNumberQuestion] = useState<number>(0);
  // reset initial state steps booking
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialState());
  }, [dispatch]);
  // get quizz
  async function getWalletHistory() {
    return await request.get(`/user/quiz/getQuiz/${doctorId}`);
  }
  const { data, isLoading } = useQuery({
    queryKey: ["getWalletHistory", doctorId],
    queryFn: () => getWalletHistory(),
  });
  if (isLoading)
    return (
      <Container sx={{ mt: "70px" }}>
        <LoadingSkeleton height={70} width={"100%"} text="column" />
      </Container>
    );
  if (data?.data?.result?.length === 0)
    return <NotFoundData image={notFound} />;
  return (
    <Container sx={{ paddingY: "40px" }}>
      <BrogressQuizzes
        lengthQuestions={data?.data?.result[0]?.questions?.length}
        numberQuestion={numberQuestion}
      />
      <QuizzesSection
        quizz={data?.data?.result[0]}
        numberQuestion={numberQuestion}
        setNumberQuestion={setNumberQuestion}
      />
    </Container>
  );
}
