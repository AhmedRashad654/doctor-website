import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import BlockServices from "./BlockServices";
import { getTranslations } from "next-intl/server";
import { IServices } from "@/constants/Types";
import { getServices } from "@/services/api/services";

export default async function Services() {
  const t = await getTranslations("HomePage.Services");
  const services: IServices[] = await getServices();
  return (
    <Container sx={{ paddingY: "30px" }}>
      <Typography variant="h3" fontWeight={"bold"} color="primary.main">
        {t("Main")}
      </Typography>
      <Stack
        direction={"row"}
        gap={"35px"}
        alignItems={"center"}
        justifyContent={"space-between"}
        paddingY={"50px"}
        flexWrap={"wrap"}
      >
        {services?.map((service: IServices) => (
          <BlockServices service={service} key={service._id} />
        ))}
      </Stack>
    </Container>
  );
}
