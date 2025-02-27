import { useAppSelector } from "@/redux/hooks";
import { Button, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function ConfirmBooking() {
  const t = useTranslations("booking");
  const selectedDate = useAppSelector(
    (state) => state?.stepsBooking?.selectedDate
  );
  const selectedTime = useAppSelector(
    (state) => state?.stepsBooking?.selectedTime
  );
  function handleConfirmBooking() {
    if (!selectedDate) return alert("select Date is required");
    if (!selectedTime) return alert("select Time is required");
  }
  return (
    <Stack direction={"row"} justifyContent={"center"} marginTop={"20px"}>
      <Button
        sx={{
          width: "250px",
          padding: "10px 20px",
          backgroundColor: "#178417",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textTransform: "none",
        }}
        onClick={handleConfirmBooking}
      >
        {t("Confirm Booking")}
      </Button>
    </Stack>
  );
}
