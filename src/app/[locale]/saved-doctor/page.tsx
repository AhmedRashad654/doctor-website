import { Container, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";
import DisplaySavedDoctor from "./DisplaySavedDoctor";

export default async function SavedDoctor() {
  const t = await getTranslations("saved doctor");
  return (
    <Container sx={{ paddingY: "50px" }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", marginBottom: "20px" }}
      >
        {t("Saved doctor")}
      </Typography>{" "}
      <DisplaySavedDoctor />
    </Container>
  );
}
