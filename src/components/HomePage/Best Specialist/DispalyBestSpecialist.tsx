import CardDoctor from "@/components/Shared/CardDoctor";
import { Grid } from "@mui/material";
import React from "react";

export default function DispalyBestSpecialist() {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3].map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item}>
          <CardDoctor />
        </Grid>
      ))}
    </Grid>
  );
}
