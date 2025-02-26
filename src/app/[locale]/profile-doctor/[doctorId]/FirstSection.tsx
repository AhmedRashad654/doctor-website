import { Box, Stack, Typography } from "@mui/material";
import React from "react";

export default function FirstSection({
  name,
  degree,
  address,
}: {
  name: string;
  degree: string[];
  address: string;
}) {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      gap={"20px"}
      justifyContent={"space-between"}
      alignItems={"start"}
      marginTop={"70px"}
    >
      <Stack>
        <Typography variant="h4" color="primary.main">
          {name}
        </Typography>
        <Typography variant="h6" color="secondary.main">
          {degree?.slice(0, 2).join(", ")}
        </Typography>
        <Typography variant="body1" color="#777">
          {address}
        </Typography>
      </Stack>
      <Box
        sx={{
          backgroundColor: "backGround.main",
          borderRadius: "15px",
          color: "primary.main",
          padding: "5px 15px",
          marginTop: { md: "7px" },
        }}
      >
        Prediction
      </Box>
    </Stack>
  );
}
