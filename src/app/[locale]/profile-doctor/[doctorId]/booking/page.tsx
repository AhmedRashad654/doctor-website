"use client";
import React, { useEffect, useState } from "react";
import { useContextState } from "../../../../../../context/ContextUseState";
import { useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import HeaderDetailsDoctor from "../HeaderDetailsDoctor";
import { Box, Container, Typography } from "@mui/material";
import FirstSection from "../FirstSection";
import SelectDateBooking from "./selectDateBooking/SelectDateBooking";
import { useTranslations } from "next-intl";
import dayjs, { Dayjs } from "dayjs";
import TimeSelector from "./selectDateBooking/TimeSelector";
import ConfirmBooking from "./ConfirmBooking";
import { getDateAndTimeToBooking } from "@/services/api/booking";
import { IDateDoctor } from "@/constants/Types";

export default function Booking() {
  const { profileDoctor } = useContextState();
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(today);
  const [availbleDate, setAvailableDate] = useState<IDateDoctor>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const t = useTranslations("booking");
  const { doctorId } = useParams();
  const router = useRouter();
  // check profile doctor availbale
  useEffect(() => {
    if (!profileDoctor) {
      router.push(`/profile-doctor/${doctorId}`);
    }
  }, [doctorId, profileDoctor, router]);
  // get date and time available
  useEffect(() => {
    async function getDateAndTime() {
      const response = await getDateAndTimeToBooking(
        selectedDate,
        doctorId,
      );
      setAvailableDate(response);
    }
    getDateAndTime();
  }, [doctorId, selectedDate]);
  if (!profileDoctor) return;
  if (availbleDate?.status === false || availbleDate?.isOpen === false)
    return <Typography>{t("not available")}</Typography>;
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
        <SelectDateBooking
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          today={today}
        />
        <Typography variant="h5" color="primary.main" marginTop={"15px"}>
          {t("Select Time")}
        </Typography>
        <TimeSelector
          times={availbleDate?.allSlot?.morning}
          busySlots={availbleDate?.busySlots}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
        />
        <TimeSelector
          times={availbleDate?.allSlot?.evening}
          busySlots={availbleDate?.busySlots}
          setSelectedTime={setSelectedTime}
          selectedTime={selectedTime}
        />
        <ConfirmBooking
          selectedDate={selectedDate}
          selectedTime={selectedTime}
        />
      </Container>
    </Box>
  );
}
