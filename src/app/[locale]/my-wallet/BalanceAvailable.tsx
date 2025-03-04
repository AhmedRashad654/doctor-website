"use client";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import balance from "../../../../public/assets/images/money.png";
import ButtonAddMonyAndHistory from "./ButtonAddMonyAndHistory";
import { transferAmount } from "@/services/functionShares";
import { useTranslations } from "next-intl";
import { getMoneyWallet } from "@/services/api/wallet/wallet";
import { useQuery } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
export default function BalanceAvailable() {
  const t = useTranslations("my-wallet");
  const userId = useAppSelector((state) => state?.user?._id);
  const { data } = useQuery({
    queryKey: ["getMoneyWallet"],
    queryFn: () => getMoneyWallet(),
    enabled: !!userId,
  });
  return (
    <Stack
      direction={"column"}
      spacing={2}
      sx={{ width: "fit-content", margin: "auto" }}
    >
      <Stack
        direction="row"
        sx={{
          backgroundColor: "backGround.main",
          borderRadius: "15px",
          boxShadow: 2,
          padding: { md: "40px", xs: "20px" },
        }}
      >
        <Stack direction={"column"} spacing={2} alignItems={"center"}>
          <Typography variant="h6" sx={{ color: "#777" }}>
            {t("Available Balance")}
          </Typography>
          <Typography variant="h4" sx={{ color: "primary.main" }}>
            {transferAmount(data?.amount ? data?.amount : 0)}
          </Typography>
        </Stack>
        <Image alt="available balance" src={balance} className="w-[80px]" />
      </Stack>
      <ButtonAddMonyAndHistory />
    </Stack>
  );
}
