import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { Tabs, Tab, Box } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useTranslations } from "next-intl";

export default function SelectDateBooking({
  selectedDate,
  setSelectedDate,
  today,
}: {
  selectedDate: Dayjs | null;
  setSelectedDate: Dispatch<SetStateAction<Dayjs | null>>;
  today: Dayjs;
}) {
  const t = useTranslations("booking");

  const [currentDate, setCurrentDate] = useState(
    new Date(today.year(), today.month(), 1)
  );
  const [daysInMonth, setDaysInMonth] = useState<Dayjs[]>([]);
  const [tabIndex, setTabIndex] = useState(0);
  useEffect(() => {
    const startDate = startOfMonth(currentDate);
    const endDate = endOfMonth(currentDate);
    const newDaysInMonth = eachDayOfInterval({
      start: startDate,
      end: endDate,
    }).map((day) => dayjs(day));

    setDaysInMonth(newDaysInMonth);
    const newTodayIndex = newDaysInMonth.findIndex((day) =>
      day.isSame(selectedDate, "day")
    );
    setTabIndex(newTodayIndex !== -1 ? newTodayIndex : 0);
  }, [currentDate, selectedDate]);

  const handleDateChange = (newValue: Dayjs | null) => {
    if (newValue) {
      setSelectedDate(newValue);
      setCurrentDate(new Date(newValue.year(), newValue.month(), 1));
    }
  };

  return (
    <Box sx={{ maxWidth: "100%", borderRadius: 2, paddingY: 2, mt: 2 }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          views={["year", "month"]}
          label={t("Select Month and Year")}
          value={selectedDate}
          onChange={handleDateChange}
          sx={{ width: { md: "250px", xs: "100%" }, mb: 2 }}
        />
      </LocalizationProvider>
      <Tabs
        value={tabIndex}
        onChange={(_, newValue) => setTabIndex(newValue)}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="Scrollable calendar tabs"
        sx={{
          backgroundColor: "#eeffff",
          borderRadius: "15px",
          height: "70px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {daysInMonth.map((day, index) => (
          <Tab
            key={day.toString()}
            label={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 60,
                  height: 60,
                  position: "relative",
                }}
              >
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  {format(day.toDate(), "d")}
                </span>
                <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>
                  {format(day.toDate(), "EEE")}
                </span>
                {tabIndex === index && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      height: "2px",
                      bgcolor: "#0a456f",
                    }}
                  />
                )}
              </Box>
            }
            onClick={() => {
              setTabIndex(index);
              setSelectedDate(day);
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
