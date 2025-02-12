"use client";
import {
  Button,
  Container,
  Avatar,
  IconButton,
  Box,
  Stack,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useTranslations } from "next-intl";
export default function EditProfile() {
  const t = useTranslations("edit profile");
  return (
    <Container maxWidth="sm" sx={{ paddingY: "50px" }}>
      <Stack direction={"column"} alignItems={"center"} spacing={3}>
        <Box position="relative">
          <Avatar sx={{ width: 100, height: 100 }} />
          <IconButton
            sx={{ position: "absolute", bottom: -10, left: 30 }}
            color="primary"
            component="label"
          >
            <PhotoCamera />
            <input type="file" hidden />
          </IconButton>
        </Box>

        <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
          <label htmlFor="" className="text-[#0a456f] font-semibold">
            {t("Full Name")}
          </label>
          <input
            type="text"
            className="p-4 bg-[#eeffff] shadow-md outline-none text-[#777]"
            defaultValue={"Ahmed Rashad"}
            style={{ borderRadius: "10px", border: "1px solid #555" }}
          />
        </Stack>

        <Stack direction={"column"} spacing={2} sx={{ width: "100%" }}>
          <label htmlFor="" className="text-[#0a456f] font-semibold">
            {t("Email")}
          </label>
          <input
            type="text"
            className="p-4 bg-[#eeffff] shadow-md outline-none text-[#777]"
            defaultValue={"Ahmed123@gmail.com"}
            style={{ borderRadius: "10px", border: "1px solid #555" }}
          />
        </Stack>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "10px",
            width: "100%",
            padding: "10px",
            fontWeight: "semibold",
            fontSize: "1.2rem",
            textTransform: "none",
          }}
        >
          {t("Save")}
        </Button>
      </Stack>
    </Container>
  );
}
