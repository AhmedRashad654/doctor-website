import { Stack } from "@mui/material";
import React from "react";
import AboutMeDoctor from "./AboutMeDoctor";
import ServicesDoctor from "./ServicesDoctor";
import ExperitsDoctor from "./ExperitsDoctor";
import WorkingTimeDoctor from "./WorkingTimeDoctor";
import LanguageDoctor from "./LanguageDoctor";

export default function Details() {
  return (
    <Stack direction="column" spacing={3}>
      <AboutMeDoctor />
      <ServicesDoctor />
      <ExperitsDoctor />
      <WorkingTimeDoctor />
      <LanguageDoctor />
    </Stack>
  );
}
