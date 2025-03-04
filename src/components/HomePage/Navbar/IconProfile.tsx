"use client";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import { Box, Drawer, IconButton } from "@mui/material";
import Sidebar from "./Sidebar";
import LoginAndRegister from "./LoginAndRegister";
import { useAppSelector } from "@/redux/hooks";
export default function IconProfile() {
  const [open, setOpen] = useState<boolean>(false);
  const user = useAppSelector((state) => state.user);
  if (user?._id == "") return <LoginAndRegister />;
  return (
    <Box>
      <IconButton onClick={() => setOpen(true)} sx={{ p: 0 }}>
        <AccountCircleIcon fontSize="large" color="primary" />
      </IconButton>
      {/* <IconButton sx={{ p: 0 }}>
        <CircleNotificationsIcon fontSize="large" color="primary" />
      </IconButton> */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Sidebar />
      </Drawer>
    </Box>
  );
}
