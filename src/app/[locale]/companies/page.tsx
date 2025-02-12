import React from "react";
import notFound from "../../../../public/assets/images/coming soon.png";
import { Container, Stack } from "@mui/material";
import Image from "next/image";
export default function Companies() {
  return (
    <Container sx={{ minHeight: "70vh", paddingY: "70px" }}>
      <Stack justifyContent={"center"} alignItems={"center"} width={"100%"}>
        <Image src={notFound} alt="comming-zoon" className={`md:w-[35%] w-[80%]`} />
      </Stack>
    </Container>
  );
}
