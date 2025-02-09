"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import userLogin from "../../../../../public/assets/images/userLogin.png";
import HeaderAuth from "../HeaderAuth";
import CustomInput from "../CustomInput";
import { AccountCircleOutlined, Google } from "@mui/icons-material";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
export default function Login() {
  const t = useTranslations("Login");
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
          border: "1px solid white",
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
        <Image
          src={userLogin}
          alt="user login"
          width={70}
          height={70}
          className="mb-5"
        />
        <CustomInput
          placeholder={t("username")}
          type="text"
          color="white"
          icon={<AccountCircleOutlined sx={{ color: "white" }} />}
        />
        <CustomInput
          placeholder={t("password")}
          type="password"
          color="white"
        />
        <Button
          sx={{
            backgroundColor: "white",
            color: "primary.main",
            borderRadius: "10px",
            width: "100%",
            padding: "10px",
            fontWeight: "semibold",
            fontSize: "1.2rem",
            textTransform: "none",
           
          }}
        >
          {t("button")}
        </Button>
        <Button
          variant="contained"
          startIcon={<Google />}
          sx={{
            backgroundColor: "#DB4437",
            color: "white",
            textTransform: "none",
            width: "100%",
            padding: "10px",
            fontWeight: "semibold",
            fontSize: "1.2rem",
            marginTop: "10px",
            borderRadius: "10px",
          }}
        >
          {t("loginGoogle")}
        </Button>
        <Typography
          variant="body1"
          sx={{ mt: 2, color: "white", cursor: "pointer", textAlign: "center" }}
        >
          {t("NotAccount")}
          <Link href={"/register"}> {t("RegisterNow")}</Link>
        </Typography>
      </Box>
    </Stack>
  );
}
