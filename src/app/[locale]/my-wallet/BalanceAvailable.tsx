"use client";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import balance from '../../../../public/assets/images/money.png'
import ModelAddCreditCard from "./ModelAddCreditCard";
import { useTranslations } from "next-intl";
export default function BalanceAvailable() {
  const t = useTranslations("my-wallet")
   const [open, setOpen] = useState(false);
  return (
    <Stack direction={"column"} spacing={2} sx={{  width: "fit-content",margin:"auto"}}>
      <Stack direction="row" sx={{ backgroundColor: "backGround.main", borderRadius:"15px",boxShadow: 2, padding: { md: "40px", xs: "20px" } }}>
        <Stack direction={"column"} spacing={2} alignItems={"center"} >
          <Typography variant="h6" sx={{color:"#777"}}>{t("Available Balance")}</Typography>
          <Typography variant="h4" sx={{color:"primary.main"}}>120$</Typography>
        </Stack>
          <Image alt="available balance" src={balance} className="w-[80px]"/>
      </Stack>
      <Stack direction="row" alignItems={"center"} gap={"10px"} flexWrap={"wrap"}>
       <Button
          variant="contained"
          sx={{
            backgroundColor: "#E72323",
            color: "white",
            width:"48%",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "semibold",
            textTransform: "none",
          }}
          onClick={()=>setOpen(true)}
        >
          {t("Add Money")}
        </Button>
            <Button
          variant="contained"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            width:"48%",
            borderRadius: "10px",
            padding: "10px",
            fontWeight: "semibold",
            textTransform: "none",
          }}
        >
          {t("History")}
        </Button>
      </Stack>
      <ModelAddCreditCard open={open} setOpen={ setOpen} />
    </Stack>
  );
}
