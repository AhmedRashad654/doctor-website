"use client";
import { Button, IconButton, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useRouter } from "@/i18n/routing";
import { Doctor } from "@/constants/Types";
import { transferAmount } from "@/services/functionShares";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setDoctor } from "@/redux/features/stepsBookingSlice";
export default function Book({ doctor }: { doctor: Doctor }) {
  const t = useTranslations("profileDoctor");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const doctorRedux = useAppSelector((state) => state?.stepsBooking?.doctor);
  useEffect(() => {
    if (!doctorRedux?._id || doctorRedux?._id !== doctor?._id) {
      dispatch(setDoctor(doctor));
    }
  }, [dispatch, doctor, doctorRedux?._id]);
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      direction={"row"}
      spacing={1}
      sx={{ marginY: "30px" }}
    >
      <Button
        onClick={() => {
          router.push(`/profile-doctor/${doctor?._id}/booking`);
        }}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: "5px",
          width: "200px",
          padding: "10px",
          fontWeight: "semibold",
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        {t("Book Now")} :{transferAmount(doctor?.charge)}
      </Button>
      <Link
        href={`/chat/${doctor?._id}?name=${doctor?.name}&designation=${doctor?.designation}&image=${doctor?.image}`}
      >
        <IconButton>
          <ChatIcon sx={{ fontSize: "40px", color: "primary.main" }} />
        </IconButton>
      </Link>
    </Stack>
  );
}
