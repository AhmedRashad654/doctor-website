"use client";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import { useTranslations } from "next-intl";
export default function SearchPart() {
  const t = useTranslations("HomePage.heroSection");
  return (
    <TextField
      variant="outlined"
      placeholder={t("Placeholder Search")}
      sx={{
        width: { xs: "85%", sm: "500px" },
        mt: "25px",
        borderRadius: "50px",
        backgroundColor: "white",
        "& fieldset": { border: "none" },
        "& .MuiInputBase-input": {
          color: "primary.main",
          fontSize: "1rem",
          "&::placeholder": { color: "primary.main" },
        },
      }}
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: "2rem", color: "primary.main" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <ManageSearchIcon
                sx={{ fontSize: "2rem", color: "primary.main", mb: "5px" }}
              />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}
