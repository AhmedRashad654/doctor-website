import { Box, Stack, Toolbar } from "@mui/material";
import IconProfile from "./IconProfile";
import MiddleLinks from "./MiddleLinks";
// import LoginAndRegister from "./LoginAndRegister";

function Navbar({ locale }: { locale: string }) {
  return (
    <>
     
      <Box
        width="100%"
        height="65px"
        sx={{
          backgroundColor: "primary.main",
        }}
      ></Box>
      <Box
        position={"absolute"}
        zIndex={"5"}
        sx={{
          backgroundColor: "white",
          borderRadius: "10px",
          width: "90%",
          top: "20px",
          left: locale === "en" ? "5%" : "",
          right: locale === "ar" ? "5%" : "",
          paddingX: "20px",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} gap={"50px"}>
            {/* middle links */}
            <MiddleLinks />
          </Stack>
          {/* icon profile  */}
          <IconProfile />
        </Toolbar>
      </Box>
    </>
  );
}
export default Navbar;
