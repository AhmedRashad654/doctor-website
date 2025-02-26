import { Button, Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { useTranslations } from "next-intl";
import React from "react";

export default function ConfirmBooking({
  selectedDate,
  selectedTime,
}: {
  selectedDate: Dayjs | null;
  selectedTime: string | null;
}) {
  const t = useTranslations("booking");
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
