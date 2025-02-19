import { Stack } from "@mui/material";
import { Doctor } from "@/constants/Types";
import React from "react";
import BlockSecondSection from "./BlockSecondSection";
import ScienceIcon from "@mui/icons-material/Science";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GradeIcon from "@mui/icons-material/Grade";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { getTranslations } from "next-intl/server";
export default async function SecondSection({ profile }: { profile: Doctor }) {
  
  const t = await getTranslations("profileDoctor");

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      gap={"40px"}
      alignItems={"center"}
      paddingY={"50px"}
      flexWrap={"wrap"}
    >
      <BlockSecondSection
        icon={<ScienceIcon sx={{ color: "primary.main", fontSize: "40px" }} />}
        header={`${profile.experience}/${t("Year")}`}
        text={"Experience"}
      />
      <BlockSecondSection
        icon={
          <EmojiEmotionsIcon sx={{ color: "primary.main", fontSize: "40px" }} />
        }
        header={profile.patients}
        text={"Happy Patient"}
      />
      <BlockSecondSection
        icon={<GradeIcon sx={{ color: "primary.main", fontSize: "40px" }} />}
        header={profile.rating}
        text={"Rating"}
      />
      <BlockSecondSection
        icon={
          <RateReviewIcon sx={{ color: "primary.main", fontSize: "40px" }} />
        }
        header={profile.reviewCount}
        text={"Review"}
      />
    </Stack>
  );
}
