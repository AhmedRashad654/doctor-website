import { setExplainYourProblem } from "@/redux/features/stepsBookingSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Stack, TextField, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

export default function ExplainYourProblem() {
  const dispatch = useAppDispatch();
  const t = useTranslations("booking");
  const explainValue = useAppSelector(
    (state) => state?.stepsBooking?.explainYourProblem
  );
  return (
    <Stack direction={"column"} gap={"10px"} marginTop={"20px"}>
      <Typography variant="h6" color="primary.main">
        {t("Explain")}
      </Typography>
      <TextField
        variant="outlined"
        multiline
        value={explainValue || ""}
        rows={4}
        fullWidth
        sx={{ boxShadow: 1 }}
        onChange={(e) => dispatch(setExplainYourProblem(e.target.value))}
      />
    </Stack>
  );
}
