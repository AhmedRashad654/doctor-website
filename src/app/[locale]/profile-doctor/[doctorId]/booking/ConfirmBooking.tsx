import { useAppSelector } from "@/redux/hooks";
import { Button, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";
import { useContextState } from "../../../../../../context/ContextUseState";
import useShowText from "@/components/Shared/useShowText";
import { useRouter } from "@/i18n/routing";

export default function ConfirmBooking() {
  const t = useTranslations("booking");
  const { selectedDateBooking } = useContextState();
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  const showText = useShowText();
  const router = useRouter();
  // handle confirm booking
  async function handleConfirmBooking() {
    if (!selectedDateBooking) return showText("select Date is required");
    if (bookingState?.selectedTime===null) return showText("select Time is required");
    if (bookingState?.selectAppointmentType === null)
      return showText("select appointment Type is Required");
    if (bookingState?.explainYourProblem === null)
      return showText("explain your problem is Required");
    router.push(
      `/profile-doctor/${bookingState?.doctor?._id}/booking/confirmBooking`
    );
  }
  return (
    <Stack direction={"row"} justifyContent={"center"} marginTop={"20px"}>
      <Button
        sx={{
          width: "250px",
          padding: "10px 20px",
          backgroundColor: "#319531",
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
