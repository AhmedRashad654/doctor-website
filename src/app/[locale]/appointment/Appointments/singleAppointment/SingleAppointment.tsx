import { IAppointment } from "@/constants/Types";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { format } from "date-fns";
import FooterAppointmentPending from "./FooterAppointmentPending";
import FooterAppointmentCanceled from "./FooterAppointmentCanceled";
import FooterAppointmentCompleted from "./FooterAppointmentCompleted";
import ModelCancelAppointment from "./ModelCancelAppointment";

export default function SingleAppointment({ item }: { item: IAppointment }) {
  const [openCancelAppointment, setOpenCancelAppointment] =
    useState<boolean>(false);

  return (
    <Stack
      gap="15px"
      sx={{ boxShadow: 1, borderRadius: "10px", padding: "10px" }}
    >
      <Stack direction={"row"} alignItems={"start"} gap={"10px"}>
        <Image
          src={item?.doctor?.image}
          alt={"doctor"}
          width={100}
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
      <Stack direction={"row"} alignItems={"center"} gap={"20px"} color="#777">
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <DateRangeIcon />
          <Typography>
            {item?.date ? format(item?.date.toString(), "d MMM yyyy") : null}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"5px"} alignItems={"center"}>
          <AccessTimeIcon />
          <Typography>{item?.time}</Typography>
        </Stack>
      </Stack>
      {item?.status === 1 ? (
        <FooterAppointmentPending
          setOpenCancelAppointment={setOpenCancelAppointment}
        />
      ) : item?.status === 4 ? (
        <FooterAppointmentCanceled />
      ) : item?.status === 3 ? (
        <FooterAppointmentCompleted />
      ) : (
        ""
      )}
      <ModelCancelAppointment
        appointmentId={item?._id}
        openCancelAppointment={openCancelAppointment}
        setOpenCancelAppointment={setOpenCancelAppointment}
      />
    </Stack>
  );
}
