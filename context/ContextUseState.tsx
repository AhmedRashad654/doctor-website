"use client";
import dayjs, { Dayjs } from "dayjs";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface ContextType {
  numberQuestion: number;
  setNumberQuestion: Dispatch<SetStateAction<number>>;
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [numberQuestion, setNumberQuestion] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(
    dayjs().startOf("month")
  );
  return (
    <ContextUseState.Provider
      value={{
        numberQuestion,
        setNumberQuestion,
        selectedDate,
        setSelectedDate,
      }}
    >
      {children}
    </ContextUseState.Provider>
  );
}
function useContextState() {
  const context = useContext(ContextUseState);
  if (context === undefined) {
    throw new Error("problem in context");
  }
  return context;
}
export { ContextProvider, useContextState };
