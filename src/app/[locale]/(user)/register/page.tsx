"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import userLogin from "../../../../../public/assets/images/userLogin.png";
import HeaderAuth from "../HeaderAuth";
import CustomInput from "../CustomInput";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
export default function Register() {
  const t = useTranslations("Register");
  const local = useLocale();
  const router = useRouter();
  const {
    control,
    formState: { isSubmitting },
  } = useForm();
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
          placeholder={t("fullName")}
          type="text"
          color="white"
          icon={<AccountCircleOutlined sx={{ color: "white" }} />}
        />
        <Box marginBottom={"15px"} width={"100%"}>
          <Controller
            name="phone"
            control={control}
            rules={{ required: `phone is required` }}
            render={({ field }) => (
              <PhoneInput
                {...field}
                country={"eg"}
                buttonStyle={{
                  backgroundColor: "transparent",
                  borderRight: "1px solid white",
                }}
              />
            )}
          />
        </Box>

        <CustomInput
          placeholder={t("password")}
          type="password"
          color="white"
        />
        <CustomInput
          placeholder={t("confirmPassword")}
          type="password"
          color="white"
        />
        <Button
          sx={{
            backgroundColor: "white",
            color: "primary.main",
            width: "100%",
            padding: "10px",
            fontWeight: "semibold",
            borderRadius: "10px",
            fontSize: "1.2rem",
            textTransform: "none",
          }}
          onClick={() => router.push(`/${local}/verification`)}
        >
          {isSubmitting ? t("Loading") : t("button")}
        </Button>

        <Typography
          variant="body1"
          sx={{ mt: 2, color: "white", cursor: "pointer", textAlign: "center" }}
        >
          {t("HaveAccount")}
          <Link href={"/login"}> {t("LoginNow")}</Link>
        </Typography>
      </Box>
    </Stack>
  );
}
