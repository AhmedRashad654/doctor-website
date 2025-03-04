"use client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import { useAppSelector } from "@/redux/hooks";
import dayjs from "dayjs";
import { IWalletHistory } from "@/constants/Types";
import NotFoundData from "@/components/Shared/NotFoundData";
import notFound from "../../../../../public/assets/images/notFound.png";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import { useContextState } from "../../../../../context/ContextUseState";
import { request } from "@/axios/axios";
import { useQuery } from "@tanstack/react-query";

export default function DisplayCardsHistory() {
  const { selectedDate } = useContextState();
  const userId = useAppSelector((state) => state?.user?._id);
  // get history
  async function getWalletHistory() {
    return await request.get(
      `/user/wallet/getWalletHistory?userId=${userId}&month=${selectedDate.format(
        "YYYY-MM"
      )}`
    );
  }
  const { data, isLoading } = useQuery({
    queryKey: ["getWalletHistory", selectedDate, userId],
    queryFn: () => getWalletHistory(),
    enabled: !!userId,
  });
  if (isLoading)
    return <LoadingSkeleton height={70} width={"100%"} text="column" />;
  if (data?.data?.data?.length === 0) return <NotFoundData image={notFound} />;
  if (data?.data?.status === false) return null;

  return (
    <Stack direction={"column"} gap={5} minHeight={"50vh"} marginTop={3}>
      {data?.data?.data?.map((item: IWalletHistory) => (
        <Stack
          key={item._id}
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          sx={{ boxShadow: 3, padding: "15px", borderRadius: "15px" }}
        >
          <Stack direction={"row"} alignItems={"center"} gap={"15px"}>
            <Box
              sx={{
                backgroundColor: "#EEFFFF8F",
                padding: "15px",
                borderRadius: "10px",
                color: "#0ECD2A",
              }}
            >
              <WalletIcon sx={{ fontSize: "40px" }} />
            </Box>
            <Stack direction={"column"}>
              <Typography variant="h6" sx={{ color: "#0ECD2A" }}>
                {item?.appointment?._id ? "booking Appointment" : "Add Wallet"}
              </Typography>
              <Typography variant="body1" sx={{ color: "#777" }}>
                {dayjs(item?.createdAt).format("DD/MM/YYYY hh:mm A")}
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction={"row"}
            gap={"5px"}
            alignItems={"center"}
            sx={{
              backgroundColor: "#EEFFFF8F",
              padding: "10px",
              borderRadius: "10px",
              color: "#0ECD2A",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            {item?.type === 1 ? "+" : "-"} {item?.amount}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
