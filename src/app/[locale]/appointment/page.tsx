import { Container } from "@mui/material";
import React from "react";
import Linksappointment from "./Linksappointment";
import AppointmentPending from "./Appointments/AppointmentPending";
import AppointmentCanceled from "./Appointments/AppointmentCanceled";
import AppointmentCompleted from "./Appointments/AppointmentCompleted";

export default async function Appointment({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const search = await searchParams;
  const valueSearch = search?.category || "/";
  return (
    <Container sx={{ paddingY: "30px" }}>
      <Linksappointment valueSearch={valueSearch} />
      {valueSearch === "pending" ? (
        <AppointmentPending  />
      ) : valueSearch === "cancalled" ? (
        <AppointmentCanceled  />
      ) : valueSearch === "completed" ? (
        <AppointmentCompleted  />
      ) : (
        ""
      )}
    </Container>
  );
}
