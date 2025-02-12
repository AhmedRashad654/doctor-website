import React from "react";
import { Container, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import BalanceAvailable from "./BalanceAvailable";

export default async function MyWallet() {
  const t = await getTranslations("my-wallet");
  return (
    <Container sx={{ paddingY: "50px" }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", marginBottom: "20px", marginLeft:"8px" }}
      >
        {t("My Wallet")}
      </Typography>{" "}
      <BalanceAvailable />
    </Container>
  );
}
