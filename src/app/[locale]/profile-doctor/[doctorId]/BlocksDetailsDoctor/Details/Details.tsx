import { Stack } from "@mui/material";
import React from "react";
import AboutMeDoctor from "./AboutMeDoctor";
import ServicesDoctor from "./ServicesDoctor";
import ExperitsDoctor from "./ExperitsDoctor";
import WorkingTimeDoctor from "./WorkingTimeDoctor";
import LanguageDoctor from "./LanguageDoctor";
import { Doctor } from "@/constants/Types";
export default function Details({ profile }: { profile: Doctor }) {
  return (
    <Stack direction="column" spacing={3}>
      <AboutMeDoctor about={profile.yourSelf} />
      <ServicesDoctor service={profile.service} />
      <ExperitsDoctor expertise={profile.expertise} />
      <WorkingTimeDoctor schedule={profile.schedule} />
      <LanguageDoctor language={ profile.language} />
    </Stack>
  );
}
