"use client";
import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import WalletIcon from "@mui/icons-material/Wallet";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import dayjs from "dayjs";
import { fetchWalletHistory } from "@/redux/features/walletHistorySlice";
import { IWalletHistory } from "@/constants/Types";
import NotFoundData from "@/components/Shared/NotFoundData";
import notFound from "../../../../../public/assets/images/notFound.png";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import { useContextState } from "../../../../../context/ContextUseState";

export default function DisplayCardsHistory() {
  const dispatch = useAppDispatch();
  const { selectedDate } = useContextState();
  const walletHistory = useAppSelector((state) => state.history);
  useEffect(() => {
    if (walletHistory.status === "idle") {
      dispatch(fetchWalletHistory(selectedDate.format("YYYY-MM")));
    }
  }, [dispatch, selectedDate, walletHistory.status]);

  if (walletHistory?.status === "loading")
    return <LoadingSkeleton height={70} width={"100%"} />;

  if (
    walletHistory?.status === "succeeded" &&
    walletHistory?.data?.length === 0
  )
    return <NotFoundData image={notFound} />;

  return (
    <Stack direction={"column"} gap={5} minHeight={"50vh"} marginTop={3}>
      {walletHistory &&
        walletHistory?.data?.map((item: IWalletHistory) => (
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
                  Add Wallet
                </Typography>
                <Typography variant="body1" sx={{ color: "#777" }}>
                  #{item?.uniqueId}
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
              + {item?.amount}
            </Stack>
          </Stack>
        ))}
    </Stack>
  );
}
