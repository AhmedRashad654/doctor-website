import React, { useEffect } from "react";
import { Stack, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { transferAmount } from "@/services/functionShares";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchTax } from "@/redux/features/stepsBookingSlice";
import { useTranslations } from "next-intl";

export default function PaymentAppointment() {
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  const t = useTranslations("booking");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTax(bookingState?.doctor?.charge));
  }, [bookingState?.doctor?.charge, dispatch]);
  if (!bookingState?.tax?.status) return;
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
        <CreditCardIcon sx={{ fontSize: "30px" }} />
        <Typography variant="h5">{t("Payment Amount")}</Typography>
      </Stack>
      <Stack justifyContent={"space-between"} gap={"5px"} borderRadius={"15px"}>
        <Stack
          direction="row"
          gap="5px"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "#ffffff90",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" color="#777">
            {t("Consulting Fees")}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {transferAmount(bookingState?.doctor?.charge)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap="5px"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "#ffffff90",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" color="#777">
            {t("Tax Charges")}
          </Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {transferAmount(bookingState?.tax?.data?.tax)}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          gap="5px"
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            padding: "15px",
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6">{t("Payable Amount")}</Typography>
          <Typography variant="h6" fontWeight={"bold"}>
            {transferAmount(bookingState?.tax?.data?.finalAmount)}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
