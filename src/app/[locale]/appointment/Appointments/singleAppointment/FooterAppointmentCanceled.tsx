import { Box, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function FooterAppointmentCanceled() {
    const t = useTranslations("appointment");
  return (
    <Box>
      <Typography variant="body1" color="#c43838">
        {t("this cancel")}
      </Typography>
    </Box>
  );
}
