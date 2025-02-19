import { Rating, Stack, Typography } from "@mui/material";

import React from "react";

export default function Reviews({ reviewCount }: { reviewCount: number }) {
  return (
    <Stack
      direction={"column"}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography variant="h2" color="warning">
        {reviewCount}
      </Typography>
      <Rating name="read-only" value={reviewCount} precision={0.5} readOnly />
      <Typography variant="h5" color="primary.main">
        ({reviewCount} Ratings)
      </Typography>
    </Stack>
  );
}
