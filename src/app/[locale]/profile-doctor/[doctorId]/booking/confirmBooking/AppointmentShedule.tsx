import { Stack, Typography } from "@mui/material";
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useContextState } from "../../../../../../../context/ContextUseState";
import { useAppSelector } from "@/redux/hooks";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
export default function AppointmentShedule() {
  const { selectedDateBooking } = useContextState();
  const t = useTranslations("booking")
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  return (
    <Stack
      gap={"15px"}
      padding={"15px"}
      borderRadius={"10px"}
      sx={{ backgroundColor: "backGround.main" }}
      color={"primary.main"}
      marginTop={"15px"}
    >
      <Stack direction={"row"} gap="10px" alignItems={"center"}>
        <CalendarMonthIcon sx={{ fontSize: "30px" }} />
        <Typography variant="h5">{t("Appointment Schedule")}</Typography>
      </Stack>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={"15px"}
        flexWrap={"wrap"}
        padding="15px"
        borderRadius={"15px"}
        sx={{ backgroundColor: "#ffffff90" }}
      >
        <Stack
          direction="column"
          gap="3px"
          alignItems={"center"}
          sx={{ shadow: 1 }}
        >
          <Typography variant="h6" color="#777">
            {t("Date")}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {selectedDateBooking &&
              format(selectedDateBooking.toString(), "d MMM yyyy")}
          </Typography>
        </Stack>
        <Stack direction="column" gap="7px" alignItems={"center"}>
          <Typography variant="h6" color="#777">
            {t("Time")}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {bookingState?.selectedTime}
          </Typography>
        </Stack>
        <Stack direction="column" gap="7px" alignItems={"center"}>
          <Typography variant="h6" color="#777">
            {t("Type")}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {bookingState?.selectAppointmentType === 1 ? "Online" : "At Clinic"}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
