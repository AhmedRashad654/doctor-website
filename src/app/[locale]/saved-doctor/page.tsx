import { Container, Typography } from "@mui/material";
import React from "react";
import { Button, Grid, Stack } from "@mui/material";
import CardDoctor from "@/components/Shared/CardDoctor";
import { getTranslations } from "next-intl/server";
export default async function SavedDoctor() {
  const t = await getTranslations("saved doctor");
  return (
    <Container sx={{ paddingY: "50px" }}>
      <Typography
        variant="h5"
        sx={{ color: "primary.main", marginBottom: "20px" }}
      >
        {t("Saved doctor")}
      </Typography>{" "}
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
            width: "200px",
            textTransform: "none",
            fontSize: "1.3rem",
          }}
        >
          {t("View More")}
        </Button>
      </Stack>
    </Container>
  );
}
