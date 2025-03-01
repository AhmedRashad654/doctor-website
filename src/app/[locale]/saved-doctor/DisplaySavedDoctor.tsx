"use client";
import React from "react";
import { Grid } from "@mui/material";
import CardDoctor from "@/components/Shared/CardDoctor";
import { useAppSelector } from "@/redux/hooks";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";
import NotFoundData from "@/components/Shared/NotFoundData";
import notFound from "../../../../public/assets/images/notFound.png";

export default function DisplaySavedDoctor() {
  const savedDoctor = useAppSelector((state) => state.savedDoctor);
  if (savedDoctor?.status === "loading") return <LoadingSkeleton height={70} width={"100%"} text="column"/>;
  if (savedDoctor?.status === "succeeded" && savedDoctor?.data?.length === 0)
    return <NotFoundData image={notFound} />;
  return (
    <Grid container spacing={3} sx={{ minHeight: "60vh" }}>
      {savedDoctor?.data &&
        savedDoctor?.data?.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item?._id}>
            <CardDoctor doctor={item} />
          </Grid>
        ))}
    </Grid>
  );
}
