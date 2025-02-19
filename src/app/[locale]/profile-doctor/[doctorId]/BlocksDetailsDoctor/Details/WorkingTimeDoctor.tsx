import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { getTranslations } from "next-intl/server";
import { Schedule } from "@/constants/Types";
export default async function WorkingTimeDoctor({
  schedule,
}: {
  schedule: Schedule[];
}) {
  const t = await getTranslations("profileDoctor.Details");
  return (
    <Stack direction={"column"} spacing={1}>
      <Stack
        direction={"row"}
        spacing={1}
        sx={{ color: "primary.main", gap: "7px" }}
        alignItems={"center"}
      >
        <AccessTimeIcon />
        <Typography variant="h6">{t("Working Time")}</Typography>
      </Stack>
      {schedule.map((e: Schedule, i: number) => (
        <Box
          sx={{
            borderRadius: "5px",
            padding: "5px 15px",
            backgroundColor: "backGround.main",
            color: "primary.main",
          }}
          key={i}
        >
          . {e.day} , {e.startTime} - {e.endTime}
        </Box>
      ))}
    </Stack>
  );
}
