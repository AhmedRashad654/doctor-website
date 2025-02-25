import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import SelectDateFilter from "./SelectDateFilter";
import { getTranslations } from "next-intl/server";
import DisplayCardsHistory from "./DisplayCardsHistory";

export default async function History() {
  const t = await getTranslations("history");
  return (
    <Container sx={{ paddingY: "50px" }}>
      <Stack
        direction={{ md: "row", xs: "column" }}
        justifyContent={"space-between"}
        gap={"20px"}
      >
        <Typography
          variant="h5"
          sx={{ color: "primary.main", marginBottom: "15px" }}
        >
          {t("Payment History")}
        </Typography>
        <SelectDateFilter />
      </Stack>
      <DisplayCardsHistory />
    </Container>
  );
}
