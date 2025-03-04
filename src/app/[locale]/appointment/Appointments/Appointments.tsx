"use client";
import { Box, Stack } from "@mui/material";
import React from "react";
import notFound from "../../../../../public/assets/images/not-found.png";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import NotFoundData from "@/components/Shared/NotFoundData";
import SingleAppointment from "./singleAppointment/SingleAppointment";
import { useQuery } from "@tanstack/react-query";
import { IAppointment } from "@/constants/Types";
import { useAppSelector } from "@/redux/hooks";
import { getAppointmentByStatus } from "@/services/api/appointment";

export default function Appointments({ valueSearch }: { valueSearch: string }) {
  const userId = useAppSelector((state) => state?.user?._id);
  const { data, isLoading } = useQuery({
    queryKey: ["getAppointmentByStatus", userId, valueSearch],
    queryFn: () => getAppointmentByStatus(userId, valueSearch),
    enabled: !!userId,
  });
  if (isLoading)
    return <LoadingSkeleton height={70} width={"100%"} text="column" />;

  if (data?.data?.data?.length === 0) return <NotFoundData image={notFound} />;
  if (data?.data?.status === false) return null;

  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Stack gap={"25px"} width={"100%"}>
        {data?.data?.data?.map((item: IAppointment, index: number) => (
          <SingleAppointment key={index} item={item} />
        ))}
      </Stack>
    </Box>
  );
}
