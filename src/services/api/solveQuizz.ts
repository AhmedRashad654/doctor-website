import { request } from "@/axios/axios";
import Cookies from "js-cookie";
/*
 * solve quizz
 */
const userId = Cookies.get("userId_Doctor");
export const solveQuizz = async (quizId: string, answers: number[]) => {
  const result = await request.post("/user/quiz/submitQuiz", {
    quizId: quizId,
    userId: userId,
    answers: answers,
  });
  return result?.data;
};
