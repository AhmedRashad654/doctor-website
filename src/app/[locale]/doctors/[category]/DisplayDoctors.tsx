import CardDoctor from "@/components/Shared/CardDoctor";
import { Button, Grid, Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function DispalyDectors() {
  const t = await getTranslations("Doctors");
  return (
    <>
      <Grid container spacing={3}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item}>
            <CardDoctor />
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Button
          color="primary"
          sx={{
            marginY: "25px",
            fontWeight: "bold",
            width:"200px",
            textTransform: "none",
            fontSize: "1.3rem",
          }}
        >
          {t("More")}
        </Button>
      </Stack>
    </>
  );
}
