import { Dispatch, SetStateAction, useState } from "react";
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

export default function TimeSelector({
  times,
  busySlots,
  setSelectedTime,
  selectedTime,
}: {
  times: string[] | undefined;
  busySlots: string[] | undefined;
  setSelectedTime: Dispatch<SetStateAction<string | null>>;
  selectedTime: string | null;
}) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const t = useTranslations("booking");
  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Accordion expanded={expanded} onChange={handleChange}>
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
            <Typography variant="h6">{times && times?.[0]}</Typography>
            <Typography variant="h6" color="#777">
              {t("to")}
            </Typography>
            <Typography variant="h6">
              {times && times?.[times?.length - 1]}
            </Typography>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <Stack
            direction={"row"}
            alignItems={"center"}
            gap={"10px"}
            flexWrap={"wrap"}
          >
            {times &&
              times?.map((time: string, index) => {
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
                      color: selectedTime === time ? "white" : "primary.main",
                      fontWeight: "400",
                      padding: "7px 12px",
                      cursor: isBusy ? "not-allowed" : "pointer",
                      opacity: isBusy ? 0.5 : 1,
                      border: isBusy ? "1px solid red" : "",
                    }}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Box>
                );
              })}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
