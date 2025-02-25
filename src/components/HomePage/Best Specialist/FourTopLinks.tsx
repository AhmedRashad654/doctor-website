import { Link } from "@/i18n/routing";
import { Stack } from "@mui/material";
// import { getTranslations } from "next-intl/server";
import React from "react";

export default async function FourTopLinks({
  valueSearch,
  linkSpecialist,
}: {
  valueSearch: string;
  linkSpecialist: string[];
}) {
  // const t = await getTranslations("HomePage.BestSpecialist");
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
      {linkSpecialist?.length > 0 && linkSpecialist?.map((item, i) => (
        <Link
          href={`/?tab=${item}`}
          scroll={false}
          key={i}
          className={` ${
            valueSearch === item
              ? "link-active"
              : valueSearch === "/" && i === 0
              ? "link-active"
              : ""
          } text-white text-[1.2rem] font-semibold`}
        >
          {item}
        </Link>
      ))}
    </Stack>
  );
}
