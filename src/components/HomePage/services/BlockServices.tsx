import { IServices } from "@/constants/Types";
import { Link } from "@/i18n/routing";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function BlockServices({
  service,
}: {
  service: IServices;
}) {
  return (
    <Link href={`/doctors/${service.name}`}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
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
            src={service.image}
            alt="Services"
            className={`w-[50%] h-[50%] object-cover`}
            width={70}
            height={70}
          />
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "primary.main" }}
        >
          {service.name}
        </Typography>
      </Box>
    </Link>
  );
}
