"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface QuestionContextType {
  numberQuestion: number;
  setNumberQuestion: Dispatch<SetStateAction<number>>;
}
const ContextQuestion = createContext<QuestionContextType | undefined>(
  undefined
);
function ContextProvider({ children }: { children: ReactNode }) {
  const [numberQuestion, setNumberQuestion] = useState<number>(1);
  return (
    <ContextQuestion.Provider
      value={{
        numberQuestion,
        setNumberQuestion,
      }}
    >
      {children}
    </ContextQuestion.Provider>
  );
}

export { ContextProvider, ContextQuestion };
