import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function LinksProfileDoctor({
  valueSearch,
  doctorId,
}: {
  valueSearch: string;
  doctorId: string;
}) {
  const links = [
    { path: `/profile-doctor/${doctorId}`, name: "Details", active: "/" },
    {
      path: `/profile-doctor/${doctorId}/?categoryDoctor=Address`,
      name: "Address",
      active: "Address",
    },
    {
      path: `/profile-doctor/${doctorId}/?categoryDoctor=Reviews`,
      name: "Reviews",
      active: "Reviews",
    },
    {
      path: `/profile-doctor/${doctorId}/?categoryDoctor=Education`,
      name: "Education",
      active: "Education",
    },
    {
      path: `/profile-doctor/${doctorId}/?categoryDoctor=Awards`,
      name: "Awards",
      active: "Awards",
    },
  ];
  const t = await getTranslations("profileDoctor.category");
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
            valueSearch === item.active ? "link-active3" : ""
          } text-primary text-[1.2rem] font-semibold`}
        >
          {t(item.name)}
        </Link>
      ))}
    </Stack>
  );
}
