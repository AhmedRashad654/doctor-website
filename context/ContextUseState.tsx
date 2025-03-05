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
  openFormChargeWallet: boolean;
  setOpenFormChargeWallet: Dispatch<SetStateAction<boolean>>;
  selectedDate: Dayjs;
  setSelectedDate: Dispatch<SetStateAction<Dayjs>>;
  selectedDateBooking: Dayjs | null;
  setSelectedDateBooking: Dispatch<SetStateAction<Dayjs | null>>;
  currentDateBooking: Date;
  setCurrentDateBooking: Dispatch<SetStateAction<Date>>;
}
const ContextUseState = createContext<ContextType | undefined>(undefined);
function ContextProvider({ children }: { children: ReactNode }) {
  const [openFormChargeWallet, setOpenFormChargeWallet] =
    useState<boolean>(false);

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
        openFormChargeWallet,
        setOpenFormChargeWallet,
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
