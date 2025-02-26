"use client";
import { Doctor } from "@/constants/Types";
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
  profileDoctor: Doctor | null;
  setProfileDoctor: Dispatch<SetStateAction<Doctor | null>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [numberQuestion, setNumberQuestion] = useState<number>(1);
  const [profileDoctor, setProfileDoctor] = useState<Doctor | null>(null);
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
        profileDoctor,
        setProfileDoctor,
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
