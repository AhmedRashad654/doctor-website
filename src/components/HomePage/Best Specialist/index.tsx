import { Box, Container, Typography } from "@mui/material";
import React from "react";
import FourTopLinks from "./FourTopLinks";
import { getTranslations } from "next-intl/server";
import DispalyBestSpecialist from "./DispalyBestSpecialist";

export default async function BestSpecialist({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = await getTranslations("HomePage.BestSpecialist");
  return (
    <Box sx={{ backgroundColor: "primary.main" }}>
      <Container sx={{ paddingY: "30px" }}>
        <Typography variant="h4" fontWeight={"bold"} color="white">
          {t("Best Specialist")}
        </Typography>
        {/* nav  */}
        <FourTopLinks valueSearch={valueSearch} />
        {/* bset specialist  */}
        <DispalyBestSpecialist />
      </Container>
    </Box>
  );
}
