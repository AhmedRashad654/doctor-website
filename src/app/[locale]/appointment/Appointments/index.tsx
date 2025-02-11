import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import notFound from "../../../../../public/assets/images/not-found.png";
export default function Appointments() {
  return (
    <Box sx={{ minHeight: "70vh" }}>
      <Stack
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
      >
        <Image src={notFound} alt="not found" className={`w-[50%] `} />
      </Stack>
    </Box>
  );
}
