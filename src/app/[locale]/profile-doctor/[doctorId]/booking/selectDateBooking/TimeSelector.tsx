import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTranslations } from "next-intl";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setSelectedTime } from "@/redux/features/stepsBookingSlice";
import LoadingSkeleton from "@/components/Shared/LoadingSkeleton";

export default function TimeSelector() {
  const [expandedMorning, setExpandedMorning] = useState<boolean>(false);
  const [expandedEvening, setExpandedEvening] = useState<boolean>(false);

  const t = useTranslations("booking");
  const handleChangeMorning = () => {
    setExpandedMorning(!expandedMorning);
  };
  const handleChangeEvening = () => {
    setExpandedEvening(!expandedEvening);
  };
  const selectedTime = useAppSelector(
    (state) => state?.stepsBooking?.selectedTime
  );
  const availableTimeMorning = useAppSelector(
    (state) => state?.stepsBooking?.availableTime?.allSlot?.morning
  );
  const availableTimeEvening = useAppSelector(
    (state) => state?.stepsBooking?.availableTime?.allSlot?.evening
  );
  const busySlots = useAppSelector(
    (state) => state?.stepsBooking?.availableTime?.busySlots
  );
  const stepsBooking = useAppSelector((state) => state.stepsBooking);
  const dispatch = useAppDispatch();
  return (
    <>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Accordion expanded={expandedMorning} onChange={handleChangeMorning}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"5px"}
              width={"99%"}
              color={"primary.main"}
              fontWeight={"bold"}
            >
              <Typography variant="h6">
                {availableTimeMorning && availableTimeMorning?.[0]}
              </Typography>
              <Typography variant="h6" color="#777">
                {t("to")}
              </Typography>
              <Typography variant="h6">
                {availableTimeEvening &&
                  availableTimeMorning?.[availableTimeMorning?.length - 1]}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {stepsBooking?.status === "loading" ? (
              <LoadingSkeleton width="130px" height={30} text="row" />
            ) : (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"10px"}
                flexWrap={"wrap"}
              >
                {availableTimeMorning &&
                  availableTimeMorning?.map((time: string, index) => {
                    const isBusy = busySlots?.some((slot) => slot === time);

                    return (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor:
                            selectedTime === time
                              ? "primary.main"
                              : "backGround.main",
                          borderRadius: "10px",
                          color:
                            selectedTime === time ? "white" : "primary.main",
                          fontWeight: "400",
                          padding: "7px 12px",
                          cursor: isBusy ? "not-allowed" : "pointer",
                          opacity: isBusy ? 0.5 : 1,
                          border: isBusy ? "1px solid red" : "",
                        }}
                        onClick={() => {
                          if (!isBusy) {
                            dispatch(setSelectedTime(time));
                          }
                        }}
                      >
                        {time}
                      </Box>
                    );
                  })}
              </Stack>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box sx={{ width: "100%", mt: 3 }}>
        <Accordion expanded={expandedEvening} onChange={handleChangeEvening}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
              gap={"5px"}
              width={"99%"}
              color={"primary.main"}
              fontWeight={"bold"}
            >
              <Typography variant="h6">
                {availableTimeEvening && availableTimeEvening?.[0]}
              </Typography>
              <Typography variant="h6" color="#777">
                {t("to")}
              </Typography>
              <Typography variant="h6">
                {availableTimeEvening &&
                  availableTimeEvening?.[availableTimeEvening?.length - 1]}
              </Typography>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            {stepsBooking?.status === "loading" ? (
              <LoadingSkeleton width="130px" height={30} text="row" />
            ) : (
              <Stack
                direction={"row"}
                alignItems={"center"}
                gap={"10px"}
                flexWrap={"wrap"}
              >
                {availableTimeEvening &&
                  availableTimeEvening?.map((time: string, index) => {
                    const isBusy = busySlots?.some((slot) => slot === time);

                    return (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor:
                            selectedTime === time
                              ? "primary.main"
                              : "backGround.main",
                          borderRadius: "10px",
                          color:
                            selectedTime === time ? "white" : "primary.main",
                          fontWeight: "400",
                          padding: "7px 12px",
                          cursor: isBusy ? "not-allowed" : "pointer",
                          opacity: isBusy ? 0.5 : 1,
                          border: isBusy ? "1px solid red" : "",
                        }}
                        onClick={() => {
                          dispatch(setSelectedTime(time));
                        }}
                      >
                        {time}
                      </Box>
                    );
                  })}
              </Stack>
            )}
          </AccordionDetails>
        </Accordion>
      </Box>
    </>
  );
}
