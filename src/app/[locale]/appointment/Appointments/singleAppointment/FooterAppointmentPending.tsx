import { Button } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

export default function FooterAppointmentPending({
  setOpenCancelAppointment,
}: {
  setOpenCancelAppointment: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations("appointment");

  return (
    <Button
      sx={{
        width: "250px",
        padding: "8px 20px",
        backgroundColor: "#c43838",
        borderRadius: "10px",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.1rem",
        textTransform: "none",
      }}
      onClick={() => setOpenCancelAppointment(true)}
    >
      {t("cancel appointment")}
    </Button>
  );
}
