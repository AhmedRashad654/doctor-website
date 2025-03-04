import { Box, Stack } from "@mui/material";
import React from "react";
import SingleMessage from "./SingleMessage";

export default function AllMessages() {
  return (
    <Stack
      sx={{
        height: "calc(100vh - 230px)",
        padding: "25px 5px",
        overflowY: "auto",
      }}
      direction={"column"}
      gap={"15px"}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 63, 73, 82, 62].map((item) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            justifyContent: item % 2 === 0 ? "flex-end" : "flex-start",
          }}
        >
          <SingleMessage item={item} />
        </Box>
      ))}
    </Stack>
  );
}
