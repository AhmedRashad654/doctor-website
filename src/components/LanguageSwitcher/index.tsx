"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useState } from "react";
import {
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
} from "@mui/material";
import { Language } from "@mui/icons-material";
import Image from "next/image";
import arabic from "../../../public/assets/images/arab.png";
import english from "../../../public/assets/images/english.png";

export default function LanguageSwitcher() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleChange = (lang: string) => {
    const newPath = `/${lang}${pathname.replace(/^\/[a-z]{2}/, "")}`;
    router.push(newPath);
  };

  return (
    <Box>
      <ListItemButton
        component="button"
        onClick={handleClick}
        sx={{ width: "100%" }}
      >
        <ListItemIcon>
          <Language />
        </ListItemIcon>
        <ListItemText primary={locale === "en" ? "Language" : "اللغة"} />
      </ListItemButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleChange("en")}>
          <Image
            src={english}
            alt="English"
            style={{ borderRadius: "50%", width: "30px", height: "30px" }}
          />

          <ListItemText primary="English" sx={{ marginX: "20px" }} />
        </MenuItem>
        <MenuItem onClick={() => handleChange("ar")}>
          <ListItemIcon>
            <Image
              src={arabic}
              alt="Arabic"
              width={40}
              height={40}
              style={{ borderRadius: "50%", width: "30px", height: "30px" }}
            />
          </ListItemIcon>
          <ListItemText primary="العربية" sx={{ marginX: "20px" }} />
        </MenuItem>
      </Menu>
    </Box>
  );
}
