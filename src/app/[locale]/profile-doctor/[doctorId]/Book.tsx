import { Button, IconButton, Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import { Link } from "@/i18n/routing";
export default async function Book({ doctorId }: { doctorId: string }) {
  const t = await getTranslations("profileDoctor");
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      direction={"row"}
      spacing={1}
      sx={{ marginY: "30px" }}
    >
      <Button
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          borderRadius: "5px",
          width: "200px",
          padding: "10px",
          fontWeight: "semibold",
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        {t("Book Now")} :200$
      </Button>
      <Link href={`/chat/${doctorId}`}>
        <IconButton>
          <ChatIcon sx={{ fontSize: "40px", color: "primary.main" }} />
        </IconButton>
      </Link>
    </Stack>
  );
}
