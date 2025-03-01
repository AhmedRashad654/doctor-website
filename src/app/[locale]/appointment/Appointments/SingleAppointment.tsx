import { IAppointment } from "@/constants/Types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export default function SingleAppointment({ item }: { item: IAppointment }) {
  return (
    <Stack
      gap="15px"
      sx={{ boxShadow: 1, borderRadius: "10px", padding: "10px" }}
    >
      <Stack direction={"row"} alignItems={"start"} gap={"10px"}>
        <Image
          src={item?.doctor?.image}
          alt={"doctor"}
          width={130}
          height={150}
          className=" rounded-[10px]"
        />
        <Stack direction={"column"}>
          <Typography variant="h6" color="primary.main">
            {item?.doctor?.name}
          </Typography>
          <Typography variant="body1" color="#777">
            {item?.doctor?.designation}
          </Typography>
          <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
            <Typography variant="body1" color="#777">
              {item?.doctor?.degree?.slice(0, 2).join(", ")}
            </Typography>
            <Typography variant="body1" color="primary.main">
              {item?.type === 1 ? "Online" : "At Clinic"}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <Typography>hello</Typography>
        </Stack>
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <Typography>hello</Typography>
        </Stack>
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <Typography>hello</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}
