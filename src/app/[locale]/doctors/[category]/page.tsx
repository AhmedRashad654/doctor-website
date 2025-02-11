import React from "react";
import FourTopLinkDoctor from "./FourTopLinkDoctor";
import { Container } from "@mui/material";
import DispalyDectors from "./DisplayDoctors";

export default async function Doctors({
  params,
}: {
  params: { [key: string]: string };
}) {
  const search = await params;
  const valueSearch = search?.category || "/";
  return (
    <Container
      sx={{
        marginTop: "20px",
      }}
    >
      <FourTopLinkDoctor valueSearch={valueSearch} />
      <DispalyDectors />
    </Container>
  );
}
