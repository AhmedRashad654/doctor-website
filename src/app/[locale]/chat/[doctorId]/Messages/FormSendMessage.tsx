import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React from "react";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SendIcon from "@mui/icons-material/Send";
import { useTranslations } from "next-intl";
export default function FormSendMessage() {
  const t = useTranslations("chat");
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t("placeholder")}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SendIcon sx={{ color: "primary.main", fontSize: "40px" }} />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          width: "100%",
          "& fieldset": {
            borderRadius: "50px",
          },
          padding: "25px",
        }}
      />

      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-button-file"
        type="file"
      />
      <label htmlFor="upload-button-file">
        <IconButton component="span">
          <AttachFileIcon sx={{ color: "primary.main", fontSize: "40px" }} />
        </IconButton>
      </label>
    </Stack>
  );
}
