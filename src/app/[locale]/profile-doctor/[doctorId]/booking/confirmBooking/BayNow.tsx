import { checkSlotavailable } from "@/services/api/booking";
import { Stack, Button } from "@mui/material";
import React from "react";
import { useContextState } from "../../../../../../../context/ContextUseState";
import useShowText from "@/components/Shared/useShowText";
import FormChargeWallet from "@/app/[locale]/my-wallet/FormChargeWallet";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setStatusCheckSlotAndAmount } from "@/redux/features/stepsBookingSlice";
import ModalConfirmBay from "./ModalConfirmBay";
import { useTranslations } from "next-intl";

export default function BayNow() {
  const { selectedDateBooking } = useContextState();
  const dispatch = useAppDispatch();
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  const t = useTranslations("booking")
  const showText = useShowText();
  async function handleBayNow() {
    const response = await checkSlotavailable(
      selectedDateBooking,
      bookingState
    );
    showText(response);
    if (response === "Slots Checked Successfully for book appointment!!") {
      dispatch(setStatusCheckSlotAndAmount(true));
    }
    if (response === "Insufficient fund to book this appointment")
      return <FormChargeWallet />;
  }
  return (
    <Stack direction={"row"} justifyContent={"center"} marginTop={"15px"}>
      {bookingState?.statusCheckSlotAndWallet ? <ModalConfirmBay /> : null}
      <Button
        sx={{
          width: "300px",
          padding: "10px 20px",
          backgroundColor: "#319531",
          borderRadius: "10px",
          color: "white",
          fontWeight: "bold",
          fontSize: "1.2rem",
          textTransform: "none",
        }}
        onClick={handleBayNow}
      >
        {t("Pay Now")}
      </Button>
    </Stack>
  );
}
