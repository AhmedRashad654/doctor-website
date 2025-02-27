"use client";
import { Button, IconButton, Stack } from "@mui/material";
import React, { useEffect } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Link, useRouter } from "@/i18n/routing";
import { Doctor } from "@/constants/Types";
import { transferAmount } from "@/services/functionShares";
import { useTranslations } from "next-intl";
import { useAppDispatch } from "@/redux/hooks";
import { setDoctor } from "@/redux/features/stepsBookingSlice";
export default function Book({ doctor }: { doctor: Doctor }) {
  const t = useTranslations("profileDoctor");
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(setDoctor(doctor));
  }, [dispatch, doctor]);
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
      <Link href={`/chat/${doctor?._id}`}>
        <IconButton>
          <ChatIcon sx={{ fontSize: "40px", color: "primary.main" }} />
        </IconButton>
      </Link>
    </Stack>
  );
}
