"use client";
import { Link } from "@/i18n/routing";
import { setInitialState } from "@/redux/features/stepsBookingSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Stack } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";

export default function Linksappointment({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = useTranslations("appointment");
  const links = [
    {
      path: "/appointment?category=pending",
      name: "Pending Appointment",
      active: "pending",
    },
    {
      path: "/appointment?category=cancalled",
      name: "Cancalled Appointment",
      active: "cancalled",
    },
    {
      path: "/appointment?category=completed",
      name: "Completed Appointment",
      active: "completed",
    },
  ];
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setInitialState());
  }, [dispatch]);
  return (
    <Stack
      sx={{
        paddingY: "30px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
      direction="row"
    >
      {links.map((item) => (
        <Link
          href={item.path}
          scroll={false}
          key={item.path}
          className={` font-semibold w-[240px] ${
            valueSearch === item.active ? "link-active2" : "not-active"
          }`}
        >
          {t(item.name)}
        </Link>
      ))}
    </Stack>
  );
}
