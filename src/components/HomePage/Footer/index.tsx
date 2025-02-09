import { Box, Container, Grid, Typography, Divider } from "@mui/material";
import Image from "next/image";
import { Facebook, Twitter, Instagram, WhatsApp } from "@mui/icons-material";
import footer from "../../../../public/assets/images/footerImage.png";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
export default async function Footer() {
  const t = await getTranslations("HomePage.footer");
  return (
    <Box
      component="footer"
      sx={{ bgcolor: "primary.main", py: 4, marginTop: "20px" }}
    >
      <Container maxWidth="lg">
        {/* first section  */}
        <Grid container alignItems="center">
          <Grid item md={3} display={{ xs: "none", md: "block" }}>
            <Image src={footer} alt="Logo" width={150} height={150} />
          </Grid>

          <Grid item xs={12} md={9}>
            <Grid container>
              {[
                ["About US", "Appointment", "Privacy Policy"],
                ["Contact Us", "Companies", "Trems & Conditions"],
                ["Support", "Med Clips"],
              ].map((group, index) => (
                <Grid key={index} item xs={12} sm={4}>
                  {group.map((text, idx) => (
                    <Link
                      key={idx}
                      href="#"
                      className="text-white block text-[1.2rem] my-2"
                    >
                      {t(text)}
                    </Link>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Divider  */}
        <Divider sx={{ my: 3, borderColor: "white" }} />

        {/* second section  */}
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
        >
          <Box display="flex" gap={2} mb={2}>
            {[Facebook, Twitter, Instagram, WhatsApp].map((Icon, index) => (
              <Icon
                key={index}
                sx={{ fontSize: 30, cursor: "pointer", color: "white" }}
              />
            ))}
          </Box>

          <Typography variant="body2" color="white">
            {t("Reserved")}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
