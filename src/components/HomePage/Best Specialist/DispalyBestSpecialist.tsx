import CardDoctor from "@/components/Shared/CardDoctor";
import { IBestSpecialist } from "@/constants/Types";
import { Grid } from "@mui/material";
import React from "react";

export default function DispalyBestSpecialist({
  valueSearch,
  bestSpecialist,
}: {
  valueSearch: string;
  bestSpecialist: IBestSpecialist[];
}) {
  console.log("133", bestSpecialist);
  return (
    <Grid container spacing={2}>
      {bestSpecialist
        .filter((e, index) =>
          valueSearch === "/" ? index === 0 : e.serviceName === valueSearch
        )
        .flatMap((service) => service.doctors)
        .map((doctor, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CardDoctor doctor={doctor} />
          </Grid>
        ))}
    </Grid>
  );
}
