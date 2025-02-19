import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Rating,
  Box,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { Doctor } from "@/constants/Types";
export default function CardDoctor({ doctor }: { doctor: Doctor }) {
  return (
    <Link href={`/profile-doctor/${doctor._id}`}>
      <Card
        sx={{
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: 3,
          position: "relative",
          textAlign: "center",
          backgroundColor: "backGround.main",
        }}
      >
        <IconButton
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
          }}
        >
          <BookmarkBorderIcon color="primary" />
        </IconButton>

        <Image
          height={170}
          src={doctor.image}
          width={140}
          alt="Profile Image"
          className="mt-[30px] h-[140px] mx-auto"
          style={{ borderRadius: "50%" }}
        />

        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="primary.main">
            {doctor.name}
          </Typography>
          <Typography variant="body2" color="secondary.main">
            {doctor.degree?.slice(0, 2).join(", ")}
          </Typography>
          <Typography variant="body2" mt={1} color="secondary.main">
            {doctor.expertise?.slice(0, 2).join(", ")}
          </Typography>

          <Box mt={1}>
            <Rating
              name="read-only"
              value={doctor.rating}
              precision={0.5}
              readOnly
            />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
