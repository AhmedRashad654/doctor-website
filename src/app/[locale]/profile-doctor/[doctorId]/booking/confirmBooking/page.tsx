"use client";
import { useRouter } from "@/i18n/routing";
import { useAppSelector } from "@/redux/hooks";
import { Box, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import HeaderDetailsDoctor from "../../HeaderDetailsDoctor";
import FirstSection from "../../FirstSection";
import AppointmentShedule from "./AppointmentShedule";
import PaymentAppointment from "./PaymentAppointment";
import BayNow from "./BayNow";

export default function ConfirmBookingPage() {
  const { doctorId } = useParams();
  const bookingState = useAppSelector((state) => state?.stepsBooking);
  const router = useRouter();
  useEffect(() => {
    if (bookingState?.explainYourProblem === null) {
      router.push(`/profile-doctor/${doctorId}`);
    }
  }, [bookingState?.explainYourProblem, doctorId, router]);

  if (!bookingState?.explainYourProblem) return;
  return (
    <Box>
      <HeaderDetailsDoctor image={bookingState?.doctor?.image} />
      <Container>
        <FirstSection
          name={bookingState?.doctor?.name}
          degree={bookingState?.doctor?.degree}
          address={bookingState?.doctor?.address}
          designation={bookingState?.doctor?.designation}
        />
        <AppointmentShedule />
        <PaymentAppointment />
        <BayNow />
      </Container>
    </Box>
  );
}
