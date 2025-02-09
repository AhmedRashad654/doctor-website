"use client";
import { TextField, InputAdornment } from "@mui/material";
import { JSX, useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface CustomInputProps {
  placeholder: string;
  icon?: JSX.Element;
  type?: "text" | "password" | "email";
  color?: string;
}

export default function CustomInput({
  placeholder,
  icon,
  type,
  color,
}: CustomInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      fullWidth
      variant="outlined"
      type={type === "password" && !showPassword ? "password" : "text"}
      placeholder={placeholder}
      slotProps={{
        input: {
          endAdornment:
            type === "password" ? (
              <InputAdornment position="end">
                {showPassword ? (
                  <VisibilityOffIcon
                    sx={{ cursor: "pointer", color }}
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <VisibilityIcon
                    sx={{ cursor: "pointer", color }}
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </InputAdornment>
            ) : (
              <InputAdornment position="end">{icon}</InputAdornment>
            ),
        },
      }}
      sx={{
        mb: 2,
        borderRadius: "10px",
        "& fieldset": {
          borderRadius: "10px",
          border: `1px solid ${color}`,
        },
        "&.Mui-focused fieldset": { borderColor: color },
        "& .MuiInputBase-input": {
          color,
          fontSize: "1rem",
          "&::placeholder": { color, opacity: 1 },
        },
      }}
    />
  );
}
