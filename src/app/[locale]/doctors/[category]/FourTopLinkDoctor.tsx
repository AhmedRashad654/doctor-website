import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function FourTopLinkDoctor({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = await getTranslations("Doctors");
  const links = [
    { path: "/doctors/General", name: "General", active: "General" },
    { path: "/doctors/Dental", name: "Dental", active: "Dental" },
    { path: "/doctors/Radiology", name: "Radiology", active: "Radiology" },
    { path: "/doctors/Pediatrics", name: "Pediatrics", active: "Pediatrics" },
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
            valueSearch === item.active ? "link-active2" : ""
          } text-primary text-[1.2rem] font-semibold`}
        >
          {t(item.name)}
        </Link>
      ))}
    </Stack>
  );
}
