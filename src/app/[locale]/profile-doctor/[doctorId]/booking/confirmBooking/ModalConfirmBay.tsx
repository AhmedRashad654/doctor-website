import { setStatusCheckSlotAndAmount } from "@/redux/features/stepsBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import Image from "next/image";
import React from "react";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { bookAppointment } from "@/services/api/booking";
import { useContextState } from "../../../../../../../context/ContextUseState";
import useShowText from "@/components/Shared/useShowText";

export default function ModalConfirmBay() {
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  const { selectedDateBooking } = useContextState();
  const showText = useShowText();
  const t = useTranslations("booking");
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleClose = () => {
    dispatch(setStatusCheckSlotAndAmount(false));
  };

  async function handleBookAppointment() {
    const response = await bookAppointment(selectedDateBooking, bookingState);
    handleClose();
    showText(response?.message);
    if (response?.message === "appointment send successfully!!") {
      router.replace(`/quizzes/${bookingState?.doctor?._id}`);
    }
  }
  return (
    <Modal
      keepMounted
      open={bookingState?.statusCheckSlotAndWallet}
      onClose={handleClose}
    >
      <Stack
        alignItems={"center"}
        gap={"10px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "20px",
        }}
      >
        <PaymentsIcon sx={{ fontSize: "100px", color: "primary.main" }} />
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          {t("Payment Confirm")}
        </Typography>

        <Typography
          sx={{ color: "secondary.main", width: "280px", textAlign: "center" }}
          variant="body1"
        >
          {t("Do You Want")}
        </Typography>
        <Stack direction={"row"} alignItems={"start"} gap={"10px"}>
          <Image
            src={bookingState?.doctor?.image}
            alt={"doctor"}
            width={60}
            height={60}
            className="w-[60px] h-[60px] rounded-[10px]"
          />
          <Stack direction={"column"}>
            <Typography variant="h6" color="primary.main">
              {bookingState?.doctor?.name}
            </Typography>
          </Stack>
        </Stack>
        <Box color={"#777"} sx={{ textAlign: "center" }}>
          {t("terms")}
          <Link href={"/Term&Condition"} className="text-blue-500">
            {t("link terms")}
          </Link>
        </Box>
        <Button
          sx={{
            width: "300px",
            padding: "10px 20px",
            backgroundColor: "#319531",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
            marginTop: "10px",
          }}
          onClick={handleBookAppointment}
        >
          {t("Pay Now")}
        </Button>
        <Button
          sx={{
            width: "300px",
            padding: "10px 20px",
            backgroundColor: "backGround.main",
            borderRadius: "20px",
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
          }}
          onClick={handleClose}
        >
          {t("Cancel")}
        </Button>
      </Stack>
    </Modal>
  );
}
