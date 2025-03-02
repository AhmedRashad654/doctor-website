import { Container } from "@mui/material";
import React from "react";
import Linksappointment from "./Linksappointment";
import Appointments from "./Appointments/Appointments";

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
      <Appointments
        valueSearch={
          valueSearch === "pending"
            ? "1"
            : valueSearch === "cancalled"
            ? "4"
            : valueSearch === "completed"
            ? "3"
            : ""
        }
      />
    </Container>
  );
}
