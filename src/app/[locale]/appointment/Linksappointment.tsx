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
