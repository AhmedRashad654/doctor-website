import {
  Avatar,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";

export default function HeaderChat() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        padding: "30px 0",
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"self-start"}
          gap={"20px"}
        >
          <Stack
            direction={"row"}
            flexWrap={"wrap"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Avatar
              alt="profile"
              src="/assets/images/avatar.jpg"
              sx={{
                width: "80px",
                height: "80px",
              }}
            />
            <Stack>
              <Typography variant="h6" color="white">
                Dr. Ahmed Rashad
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#8FB7D347",
                  borderRadius: "5px",
                  color: "white",
                  padding: "5px 10px",
                  width: "fit-content",
                }}
              >
                Prediction
              </Box>
            </Stack>
          </Stack>
          <IconButton>
            <VideocamIcon sx={{ color: "#C8C7C7", fontSize: "60px" }} />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
