import { Avatar, Box, Stack } from "@mui/material";
import React from "react";

export default function SingleMessage({ item }: { item: number }) {
  return (
    <Stack
      direction={item % 2 === 0 ? "row-reverse" : "row"}
      alignItems={"center"}
      gap={"5px"}
    >
      <Avatar
        alt="profile"
        src="/assets/images/avatar.jpg"
        sx={{
          width: "35px",
          height: "35px",
        }}
      />
      <Box
        className={`${item % 2 === 0 ? "border-right" : "border-left"}`}
        sx={{
          backgroundColor: item % 2 === 0 ? "primary.main" : "#E0E1FD",
          color: item % 2 === 0 ? "white" : "primary.main",
          padding: "5px 15px",
        }}
      >
        Hello My Friend
      </Box>
    </Stack>
  );
}
