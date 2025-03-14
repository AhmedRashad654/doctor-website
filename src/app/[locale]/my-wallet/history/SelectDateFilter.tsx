"use client";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useTranslations } from "next-intl";
import { Dayjs } from "dayjs";
import { useContextState } from "../../../../../context/ContextUseState";

export default function SelectDateFilter() {
  const { selectedDate, setSelectedDate } = useContextState();
  const t = useTranslations("history");
  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const formattedDate = date.format("YYYY-MM");
      if (formattedDate !== selectedDate.format("YYYY-MM")) {
        setSelectedDate(date.startOf("month"));
      }
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year", "month"]}
        label={t("label date")}
        value={selectedDate}
        onChange={handleDateChange}
        sx={{ width: { md: "250px", xs: "full" } }}
      />
    </LocalizationProvider>
  );
}
