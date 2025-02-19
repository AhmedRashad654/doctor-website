"use client";
import {
  Button,
  Container,
  Avatar,
  IconButton,
  Box,
  Stack,
  TextField,
  MenuItem,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import { useLocale, useTranslations } from "next-intl";
import { EditProfiles } from "@/constants/ِArrays";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { EditProfileField, Option, UserState } from "@/constants/Types";
import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";
import { defaultValues, onSubmit } from "@/services/api/auth";

export default function EditProfile() {
  // translate
  const t = useTranslations("edit profile");
  const lan = useLocale();
  // redux
  const user = useAppSelector((state: { user: UserState }) => state.user);
  const dispatch = useAppDispatch();
  // action update
  const [image, setImage] = useState<File | null>(null);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: defaultValues,
  });
  useEffect(() => {
    if (user) {
      reset({
        name: user.name || "",
        age: user.age || "",
        mobile: user.mobile || "",
        bio: user.bio || "",
        gender: user.gender || "",
        country: user.country || "",
      });
    }
  }, [user, reset]);

  return (
    <Container maxWidth="sm" sx={{ paddingY: "50px" }}>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, image, user._id, dispatch)
        )}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={3}>
          <Box position="relative">
            <Avatar src={user.image} sx={{ width: 100, height: 100 }} />
            <IconButton
              sx={{ position: "absolute", bottom: -10, left: 30 }}
              color="primary"
              component="label"
            >
              <PhotoCamera sx={{ color: "blue" }} />
              <input
                type="file"
                hidden
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
            </IconButton>
          </Box>

          {EditProfiles.map((e: EditProfileField, i: number) => (
            <Stack
              key={i}
              direction={"column"}
              spacing={2}
              sx={{ width: "100%" }}
            >
              <label className="text-[#0a456f] font-semibold">
                {t(e.text)}
              </label>

              {e.type === "select" ? (
                <Controller
                  name={e.name as "gender" | "country"}
                  control={control}
                  render={({ field }) => (
                    <TextField select {...field} fullWidth variant="outlined">
                      {e.option?.map((option: Option, index: number) => (
                        <MenuItem key={index} value={option.name_en}>
                          {lan === "ar" ? option.name_ar : option.name_en}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              ) : (
                <Controller
                  name={e.name as "name" | "age" | "mobile"}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type={e.type}
                      fullWidth
                      variant="outlined"
                    />
                  )}
                />
              )}
            </Stack>
          ))}

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              borderRadius: "10px",
              width: "100%",
              padding: "10px",
              fontWeight: "semibold",
              fontSize: "1.2rem",
              textTransform: "none",
            }}
          >
            {t("Save")}
          </Button>
        </Stack>
      </form>
    </Container>
  );
}
