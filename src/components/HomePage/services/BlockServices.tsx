import { Link } from "@/i18n/routing";
import { Box, Typography } from "@mui/material";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";

export default async function BlockServices({
  image,
  text,
}: {
  image: StaticImageData;
  text: string;
}) {
  const t = await getTranslations("HomePage.Services");
  return (
    <Link href={text !== "More" ? `/doctors/${text}` : ""}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <Box
          sx={{
            width: 140,
            height: 140,
            borderRadius: "50%",
            backgroundColor: "backGround.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={image}
            alt="Services"
            className={`${
              text === "General" ? "w-[70%]" : "w-[50%]"
            }  h-[50%] object-cover`}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          {t(text)}
        </Typography>
      </Box>
    </Link>
  );
}
