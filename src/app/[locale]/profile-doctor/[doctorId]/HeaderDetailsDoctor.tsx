import React from "react";
import { Avatar, Box } from "@mui/material";
export default function HeaderDetailsDoctor({ image }: { image: string }) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "150px",
        position: "relative",
        backgroundColor: "primary.main",
      }}
    >
      <Avatar
        alt="profile"
        src={image}
        sx={{
          position: "absolute",
          bottom: "-35%",
          left: "50%",
          transform: "translatex(-50%)",
          width: "120px",
          height: "120px",
        }}
      />
    </Box>
  );
}
