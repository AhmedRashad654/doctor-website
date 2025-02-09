import { Box, Typography } from "@mui/material";
import Image from "next/image";
import imageVedio from "../../../../public/assets/images/videoImage.png";
import { getTranslations } from "next-intl/server";
export default async function SectionVedio() {
  const t = await getTranslations("HomePage.vedio");
  return (
    <Box textAlign="center">
      <Typography
        variant="h3"
        fontWeight="bold"
        color="secondary.main"
        my={5}
        sx={{ position: "relative", display: "inline-block" }}
      >
        {t("main")}
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "secondary.main",
            margin: "3px auto 0",
            borderRadius: "2px",
          }}
        />
      </Typography>

      <Image
        src={imageVedio}
        alt="vedio Image"
        className="w-[100%] h-[600px] object-fill"
      />
    </Box>
  );
}
