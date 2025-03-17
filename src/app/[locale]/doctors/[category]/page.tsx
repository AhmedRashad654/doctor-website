import React from "react";
import FourTopLinkDoctor from "./FourTopLinkDoctor";
import { Container } from "@mui/material";
import DispalyDectors from "./DisplayDoctors";
import { getDoctorsBaseServiceId } from "@/services/api/doctor/getDoctors";

export default async function Doctors({
  params,
  searchParams,
}: {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string>>;
}) {
  const serviceName = await params;
  const valueServiceName = serviceName?.category || "/";
  const serviceId = await searchParams;
  const valueServiceId = serviceId?.serviceId;
  const doctors = await getDoctorsBaseServiceId(valueServiceId);
  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <FourTopLinkDoctor valueServiceName={valueServiceName} />
      <DispalyDectors doctors={doctors} />
    </Container>
  );
}
