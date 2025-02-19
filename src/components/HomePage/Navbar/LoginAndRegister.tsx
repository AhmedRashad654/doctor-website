"use client"
import React from "react";
import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
export default function LoginAndRegister() {
  const t = useTranslations("HomePage");
  return (
    <Stack
      direction={"row"}
      gap={"15px"}
      sx={{
        display: { xs: "none", md: "flex" },
        color: "primary.main",
        fontWeight: "bold",
      }}
    >
      {/* <Link href="/register">{t("navbar.Register")}</Link> */}
      <Link href="/login">{t("navbar.Login")}</Link>
    </Stack>
  );
}
