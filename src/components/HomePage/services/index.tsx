import { Container, Stack, Typography } from "@mui/material";
import React from "react";
import BlockServices from "./BlockServices";
import userImage from "../../../../public/assets/images/mdi_users.png";
import distant from "../../../../public/assets/images/Vector (1).png";
import radiology from "../../../../public/assets/images/Vector (2).png";
import more from "../../../../public/assets/images/icon-park-solid_more-app.png";
import { getTranslations } from "next-intl/server";

export default async function Services() {
  const t = await getTranslations("HomePage.Services");
  return (
    <Container sx={{ paddingY: "30px" }}>
      <Typography variant="h3" fontWeight={"bold"} color="primary.main">
        {t("Main")}
      </Typography>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        gap={"40px"}
        alignItems={"center"}
        paddingY={"50px"}
        flexWrap={"wrap"}
      >
        <BlockServices image={userImage} text={"General"} />
        <BlockServices image={distant} text={"Dental"} />
        <BlockServices image={radiology} text={"Radiology"} />
        <BlockServices image={more} text={"More"} />
      </Stack>
    </Container>
  );
}
