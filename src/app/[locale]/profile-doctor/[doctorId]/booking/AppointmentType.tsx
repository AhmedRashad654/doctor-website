import { setSelectAppointmentType } from "@/redux/features/stepsBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Stack, Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function AppointmentType() {
  const dispatch = useAppDispatch();
  const t = useTranslations("booking");
  const selectAppointmentType = useAppSelector(
    (state) => state?.stepsBooking?.selectAppointmentType
  );
  return (
    <Stack direction="column" gap="10px" marginTop={"20px"}>
      <Typography variant="h6" color="primary.main">
        {t("Appointment Type")}
      </Typography>
      <Stack direction="row" alignItems="center" gap="10px">
        {[t("Online"), t("At Clinic")].map((text, index) => (
          <Box
            key={index}
            sx={{
              padding: "8px 20px",
              borderRadius: "10px",
              boxShadow: 2,
              color:
                selectAppointmentType === index + 1 ? "white" : "primary.main",
              backgroundColor:
                selectAppointmentType === index + 1 ? "primary.main" : "white",
              fontSize: "1.2rem",
              fontWeight: "500",
              cursor: "pointer",
            }}
            onClick={() => dispatch(setSelectAppointmentType(index + 1))}
          >
            {text}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
}
