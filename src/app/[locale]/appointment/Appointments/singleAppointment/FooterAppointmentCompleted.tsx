import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function FooterAppointmentCompleted() {
  const t = useTranslations("appointment");
  return (
    <Box>
      <Typography variant="body1" color="success">
        {t("this complete")}
      </Typography>
    </Box>
  );
}
