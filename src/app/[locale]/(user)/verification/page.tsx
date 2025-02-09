"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import HeaderAuth from "../HeaderAuth";
import { useLocale, useTranslations } from "next-intl";
import OTPInput from "react-otp-input";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Verification() {
  const t = useTranslations("verification");
  const router = useRouter();
  const locale = useLocale();
  const [otp, setOtp] = useState("");
  return (
    <Stack
      sx={{
        width: "100%",
        paddingY: "20px",
        minHeight: "100vh",
        backgroundImage: "url('/assets/images/Auth.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        direction: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "white",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(10, 69, 111, 0.5)",
        },
      }}
    >
      <HeaderAuth text={t("header")} />
      <Box
        sx={{
          backgroundColor: "white",
          padding: 4,
          borderRadius: 3,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 4,
          width: { sm: "400px", xs: "350px", md: "500px" },
        }}
      >
        <Typography variant="h5" sx={{ my: 2, color: "primary.main" }}>
          {t("text")}
        </Typography>
        <Typography
          variant="h6"
          sx={{ my: 1, color: "#777", letterSpacing: "2px" }}
        >
          01092166248
        </Typography>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "55px",
                height: "55px",
                margin: "10px 4px 15px 4px",
                backgroundColor: "#e0e0e0",
                borderRadius: "8px",
                fontSize: "24px",
                textAlign: "center",
                fontWeight: "bold",
                border: "none",
                color: "black",
              }}
            />
          )}
        />
        <Button
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            borderRadius: "10px",
            width: "100%",
            padding: "10px",
            fontWeight: "semibold",
            fontSize: "1.2rem",
          }}
          onClick={() => router.push(`/${locale}`)}
        >
          {t("button")}
        </Button>
      </Box>
    </Stack>
  );
}
