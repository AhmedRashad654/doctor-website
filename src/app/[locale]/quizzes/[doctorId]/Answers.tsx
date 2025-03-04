import { IOption } from "@/constants/Types";
import { Grid } from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";

export default function Answers({
  options,
  setAnswers,
  numberQuestion,
  answers,
}: {
  options: IOption[];
  setAnswers: Dispatch<SetStateAction<number[] | []>>;
  numberQuestion: number;
  answers: number[] | [];
}) {
  return (
    <Grid container justifyContent={"space-between"} gap={"20px"}>
      {options?.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={5}
          key={index}
          sx={{
            backgroundColor:
              answers[numberQuestion] === index
                ? "babyBlue.main"
                : "backGround.main",
            color: answers[numberQuestion] === index ? "black" : "primary.main",
            border: "1px solid #0a456f",
            padding: "15px",
            borderRadius: "25px",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              border: "1px solid black",
            },
          }}
          onClick={() =>
            setAnswers((prev) => {
              const newAnswers = [...prev];
              newAnswers[numberQuestion] = index;
              return newAnswers;
            })
          }
        >
          {item?.option}
        </Grid>
      ))}
    </Grid>
  );
}
