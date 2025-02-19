import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function Linksappointment({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = await getTranslations("appointment");
  const links = [
    {
      path: "/appointment?category=approve",
      name: "Approve Appointment",
      active: "approve",
    },
    {
      path: "/appointment?category=pendding",
      name: "Pendding Appointment",
      active: "pendding",
    },
    {
      path: "/appointment?category=cancelled",
      name: "Cancelled Appointment",
      active: "cancelled",
    },
  ];
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
          className={` ${
            valueSearch === item.active ? "link-active2" : "not-active"
          }`}
        >
          {t(item.name)}
        </Link>
      ))}
    </Stack>
  );
}
