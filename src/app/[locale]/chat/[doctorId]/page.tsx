"use client";
import React from "react";
import HeaderChat from "./HeaderChat";

import { Box } from "@mui/material";
import IndexMessages from "./Messages/indexMessage";
export default function Chat() {
  return (
    <Box sx={{ paddingBottom: "10px" }}>
      <HeaderChat />
      <IndexMessages />
    </Box>
  );
}
