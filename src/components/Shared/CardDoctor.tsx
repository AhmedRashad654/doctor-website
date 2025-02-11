import {
  Card,
  CardContent,
  Typography,
  IconButton,
  Rating,
  Box,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Avatar from "../../../public/assets/images/avatar.jpg";
import Image from "next/image";
import { Link } from "@/i18n/routing";
export default function CardDoctor() {
  return (
    <Link href={`/profile-doctor/12345`}>
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
          height="140"
          src={Avatar}
          alt="Profile Image"
          className="mt-[30px] mx-auto"
          style={{ borderRadius: "50%" }}
        />

        <CardContent>
          <Typography variant="h6" fontWeight="bold" color="primary.main">
            Dr.Ali Elsham
          </Typography>
          <Typography variant="body2" color="secondary.main">
            MBBS, Pediatrcs
          </Typography>
          <Typography variant="body2" mt={1} color="secondary.main">
            Pediatrician | Brow Pediat...
          </Typography>

          <Box mt={1}>
            <Rating name="read-only" value={4.5} precision={0.5} readOnly />
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}
