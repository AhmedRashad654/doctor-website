import { Grid } from "@mui/material";
import React from "react";

export default function Answers({
  answers,
}: {
  answers: string[] | undefined;
}) {
  return (
    <Grid container justifyContent={"space-between"} gap={"20px"}>
      {answers?.map((item, index) => (
        <Grid
          item
          xs={12}
          sm={5}
          key={index}
          sx={{
            backgroundColor: "backGround.main",
            color: "primary.main",
            border: "1px solid #0a456f",
            padding: "15px",
            borderRadius: "25px",
            transition: "background-color 0.3s ease",
            cursor: "pointer",
            "&:hover": {
              border: "1px solid black",
            },
          }}
        >
          {index === 0
            ? "A)"
            : index === 1
            ? "B)"
            : index === 2
            ? "C)"
            : index === 3
            ? "D)"
            : ""}{" "}
          {item}
        </Grid>
      ))}
    </Grid>
  );
}
