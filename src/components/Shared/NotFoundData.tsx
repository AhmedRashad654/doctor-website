import { Stack } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React from "react";

export default function NotFoundData({ image }: { image: StaticImageData }) {
  return (
    <Stack alignItems={"center"} sx={{ width: "100%", minHeight: "60vh", justifyContent: "center" }}>
      <Image src={image} alt="not-found data" className="md:w-[55%] w-[80%]" />
    </Stack>
  );
}
