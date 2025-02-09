import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function FourTopLinks({
  valueSearch,
}: {
  valueSearch: string;
}) {
  const t = await getTranslations("HomePage.BestSpecialist");
  const links = [
    { path: "/", name: "General", active: "/" },
    { path: "/?tab=Dental", name: "Dental", active: "Dental" },
    { path: "/?tab=Radiology", name: "Radiology", active: "Radiology" },
    { path: "/?tab=Pediatrics", name: "Pediatrics", active: "Pediatrics" },
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
            valueSearch === item.active ? "link-active" : ""
          } text-white text-[1.2rem] font-semibold`}
        >
          {t(item.name)}
        </Link>
      ))}
    </Stack>
  );
}
