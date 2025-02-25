import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FourTopLinks from "./FourTopLinks";
import { getTranslations } from "next-intl/server";
import DispalyBestSpecialist from "./DispalyBestSpecialist";
import { getBestSpecialist } from "@/services/api/services";
import { IBestSpecialist } from "@/constants/Types";
export default async function BestSpecialist({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = await getTranslations("HomePage.BestSpecialist");
  const {
    linkSpecialist,
    bestSpecialist,
  }: { linkSpecialist: string[]; bestSpecialist: IBestSpecialist[] } =
    await getBestSpecialist();
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Container sx={{ paddingY: "30px" }}>
        <Typography variant="h4" fontWeight={"bold"} color="white">
          {t("Best Specialist")}
        </Typography>
        <FourTopLinks
          valueSearch={valueSearch}
          linkSpecialist={linkSpecialist}
        />
        <DispalyBestSpecialist
          valueSearch={valueSearch}
          bestSpecialist={bestSpecialist}
        />
      </Container>
    </Box>
  );
}
