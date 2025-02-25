import { IServices } from "@/constants/Types";
import { Link } from "@/i18n/routing";
import { getServices } from "@/services/api/services";
import { Stack } from "@mui/material";
import React from "react";

export default async function FourTopLinkDoctor({
  valueServiceName,
}: {
  valueServiceName: string;
}) {
  const services: IServices[] = await getServices();
  return (
    <Stack
      sx={{
        padding: "30px 10px",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "30px",
        flexWrap: "wrap",
      }}
      direction="row"
    >
      {services &&
        services?.map((item: IServices) => (
          <Link
            href={`/doctors/${item.name}?serviceId=${item._id}`}
            scroll={false}
            key={item._id}
            className={` ${
              valueServiceName === item.name ? "link-active2" : ""
            } text-primary text-[1.2rem] font-semibold`}
          >
            {item.name}
          </Link>
        ))}
    </Stack>
  );
}
