import { Stack } from "@mui/material";
import React from "react";
import BlockSecondSection from "./BlockSecondSection";
import ScienceIcon from "@mui/icons-material/Science";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import GradeIcon from "@mui/icons-material/Grade";
import RateReviewIcon from "@mui/icons-material/RateReview";
export default function SecondSection() {
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
        header={"12/"}
        text={"Experience"}
      />
      <BlockSecondSection
        icon={
          <EmojiEmotionsIcon sx={{ color: "primary.main", fontSize: "40px" }} />
        }
        header={"0"}
        text={"Happy Patient"}
      />
      <BlockSecondSection
        icon={<GradeIcon sx={{ color: "primary.main", fontSize: "40px" }} />}
        header={"0.0"}
        text={"Rating"}
      />
      <BlockSecondSection
        icon={
          <RateReviewIcon sx={{ color: "primary.main", fontSize: "40px" }} />
        }
        header={"0"}
        text={"Review"}
      />
    </Stack>
  );
}
