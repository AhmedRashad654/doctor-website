"use client";
import React, { useEffect, useRef } from "react";
import ModelAddCreditCard from "./ModelAddCreditCard";
import { Button, Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import { useRouter } from "@/i18n/routing";
import { useContextState } from "../../../../context/ContextUseState";

export default function ButtonAddMonyAndHistory() {
  const t = useTranslations("my-wallet");
  const { openFormChargeWallet, setOpenFormChargeWallet } = useContextState();
  const router = useRouter()
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!open && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [openFormChargeWallet]);
  return (
    <>
      <Stack
        direction="row"
        alignItems={"center"}
        gap={"10px"}
        flexWrap={"wrap"}
      >
        <Button
          ref={triggerRef}
          variant="contained"
          sx={{
            backgroundColor: "#E72323",
            color: "white",
            width: "48%",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "semibold",
            textTransform: "none",
          }}
          onClick={() => setOpenFormChargeWallet(true)}
        >
          {t("Add Money")}
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width: "48%",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "semibold",
            textTransform: "none",
          }}
          onClick={() => router.push("/my-wallet/history")}
        >
          {t("History")}
        </Button>
      </Stack>
      <ModelAddCreditCard />
    </>
  );
}
