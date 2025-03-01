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
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;

  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  selectedDateBooking: Dayjs | null;
  setSelectedDateBooking: Dispatch<SetStateAction<Dayjs | null>>;
  currentDateBooking: Date;
  setCurrentDateBooking: Dispatch<SetStateAction<Date>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [numberQuestion, setNumberQuestion] = useState<number>(1);
  const [open, setOpen] = useState<boolean>(false);

  const today = dayjs();
  const [selectedDateBooking, setSelectedDateBooking] = useState<Dayjs | null>(
    today
  );
  const [currentDateBooking, setCurrentDateBooking] = useState(
    new Date(today.year(), today.month(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Dayjs>(
    dayjs().startOf("month")
  );
  return (
    <ContextUseState.Provider
      value={{
        open,
        setOpen,
        numberQuestion,
        setNumberQuestion,
        selectedDate,
        setSelectedDate,
        selectedDateBooking,
        setSelectedDateBooking,
        currentDateBooking,
        setCurrentDateBooking,
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
