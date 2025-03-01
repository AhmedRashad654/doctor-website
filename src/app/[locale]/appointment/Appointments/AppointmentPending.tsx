"use client";
import { Box, Stack } from "@mui/material";
import React, { useEffect } from "react";
import notFound from "../../../../../public/assets/images/not-found.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchAppointmentPending } from "@/redux/features/appointment/appointmentPendingSlice";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import NotFoundData from "@/components/Shared/NotFoundData";
import SingleAppointment from "./SingleAppointment";
export default function AppointmentPending() {
  const appointmentPending = useAppSelector(
    (state) => state?.appointmentPending
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (appointmentPending?.status === "idle") {
      dispatch(fetchAppointmentPending());
    }
  }, [appointmentPending?.status, dispatch]);

  if (appointmentPending?.status === "loading")
    return <LoadingSkeleton height={70} width={"100%"} text="column" />;

  if (
    appointmentPending?.status === "succeeded" &&
    appointmentPending?.data?.length === 0
  )
    return <NotFoundData image={notFound} />;
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Stack gap={"25px"} width={"100%"}>
        {appointmentPending?.data?.map((item, index) => (
          <SingleAppointment key={index} item={ item} />
        ))}
      </Stack>
    </Box>
  );
}
