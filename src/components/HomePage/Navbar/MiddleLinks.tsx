"use client";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, usePathname } from "@/i18n/routing";
import { Box, IconButton, List, ListItem } from "@mui/material";
import { navbarLinks } from "@/constants/NavbarLinks";
import { useTranslations } from "next-intl";
export default function MiddleLinks() {
  const pathname = usePathname();
  const t = useTranslations("HomePage.navbar");

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton size="large" onClick={handleOpenNavMenu} color="primary">
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorElNav}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
            borderRadius: "50px",
          }}
        >
          <List>
            {navbarLinks.map((item) => (
              <ListItem
                key={item.path}
                onClick={handleCloseNavMenu}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                    transition: "0.5s",
                  },
                }}
              >
                <Link href={item.path}>{item.name}</Link>
              </ListItem>
            ))}
          </List>
        </Menu>
      </Box>

      <Box sx={{ display: { xs: "none", md: "flex" }, gap: "30px" }}>
        {navbarLinks.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            onClick={handleCloseNavMenu}
            className={`text-primary ${
              pathname === item.path ? "font-bold" : ""
            }`}
          >
            {t(item.name)}
          </Link>
        ))}
      </Box>
    </>
  );
}
