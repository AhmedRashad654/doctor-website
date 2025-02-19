import React from "react";
import { Avatar, Box, IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
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
      <IconButton
        sx={{
          position: "absolute",
          top: 15,
          right: 15,
        }}
      >
        <BookmarkBorderIcon sx={{ color: "white" }} />
      </IconButton>
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
