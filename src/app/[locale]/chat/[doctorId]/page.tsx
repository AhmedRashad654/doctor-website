import React from "react";
import HeaderChat from "./HeaderChat";
import Messages from "./Messages";
import { Box } from "@mui/material";
export default function Chat() {
  return (
    <Box sx={{ paddingBottom: "10px" }}>
      <HeaderChat />
      <Messages />
    </Box>
  );
}
