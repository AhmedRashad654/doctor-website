import { Rating, Stack, Typography } from "@mui/material";

import React from "react";

export default function Reviews() {
 
  return (
    <Stack
      direction={"column"}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2" color="warning">
        0.0
      </Typography>
      <Rating name="read-only" value={5} precision={0.5} readOnly />
      <Typography variant="h5" color="primary.main">
        (0.0 Ratings)
      </Typography>
    </Stack>
  );
}
