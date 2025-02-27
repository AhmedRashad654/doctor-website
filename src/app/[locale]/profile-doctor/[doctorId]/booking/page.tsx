"use client";
import React, { useEffect } from "react";
import { useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import HeaderDetailsDoctor from "../HeaderDetailsDoctor";
import { Box, Container, Typography } from "@mui/material";
import FirstSection from "../FirstSection";
import SelectDateBooking from "./selectDateBooking/SelectDateBooking";
import { useTranslations } from "next-intl";
import TimeSelector from "./selectDateBooking/TimeSelector";
import ConfirmBooking from "./ConfirmBooking";
import { useAppSelector } from "@/redux/hooks";

export default function Booking() {
  const profileDoctor = useAppSelector((state) => state?.stepsBooking?.doctor);
  const t = useTranslations("booking");
  const { doctorId } = useParams();
  const router = useRouter();
  // check profile doctor availbale
  useEffect(() => {
    if (!profileDoctor) {
      router.push(`/profile-doctor/${doctorId}`);
    }
  }, [doctorId, profileDoctor, router]);

  return (
    <Box>
      <HeaderDetailsDoctor image={profileDoctor.image} />
      <Container>
        <FirstSection
          name={profileDoctor?.name}
          degree={profileDoctor.degree}
          address={profileDoctor.address}
        />
        <Typography variant="h5" color="primary.main" marginTop={"15px"}>
          {t("Select Date")}
        </Typography>
        <SelectDateBooking doctorId={doctorId} />
        <Typography variant="h5" color="primary.main" marginTop={"15px"}>
          {t("Select Time")}
        </Typography>
        <TimeSelector />
        <ConfirmBooking />
      </Container>
    </Box>
  );
}
