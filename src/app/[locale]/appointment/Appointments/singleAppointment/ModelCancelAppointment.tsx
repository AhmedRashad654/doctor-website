import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction, useState } from "react";
import { useSearchParams } from "next/navigation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import useShowText from "@/components/Shared/useShowText";
import { cancelAppointment } from "@/services/api/appointment";
import { useQueryClient } from "@tanstack/react-query";
import { useAppSelector } from "@/redux/hooks";
export default function ModelCancelAppointment({
  appointmentId,
  openCancelAppointment,
  setOpenCancelAppointment,
}: {
  appointmentId: string;
  openCancelAppointment: boolean;
  setOpenCancelAppointment: Dispatch<SetStateAction<boolean>>;
}) {
  // translate
  const t = useTranslations("appointment");
  // react query
  const queryClient = useQueryClient();
  // userId
  const userId = useAppSelector((state) => state?.user?._id);
  // search param
  const searchParams = useSearchParams();
  const valueSearchParams = searchParams.get("category");
  // state open form
  const [reasonCancelAppointment, setReasonCancelAppointment] = useState<
    string | null
  >(null);
  // hook show text
  const showText = useShowText();
  function handleClose() {
    setOpenCancelAppointment(false);
  }

  // handle cancel appointment
  async function handleCancelAppointmend() {
    if (!reasonCancelAppointment)
      return showText("cancelled reason is required");
    const response = await cancelAppointment(
      appointmentId,
      reasonCancelAppointment
    );
    showText(response.message);
    setReasonCancelAppointment(null);
    const statusKey =
      valueSearchParams === "pending"
        ? "1"
        : valueSearchParams === "cancalled"
        ? "4"
        : "3";
    const queryKey = ["getAppointmentByStatus", statusKey, userId];
    queryClient.invalidateQueries({ queryKey });
    handleClose();
  }

  return (
    <Modal keepMounted open={openCancelAppointment} onClose={handleClose}>
      <Stack
        alignItems={"center"}
        gap={"10px"}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "350px",
          bgcolor: "white",
          boxShadow: 24,
          borderRadius: "25px",
          padding: "20px",
        }}
      >
        <CalendarMonthIcon sx={{ fontSize: "100px", color: "primary.main" }} />
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          {t("cancel appointment")}
        </Typography>

        <Typography
          sx={{ color: "secondary.main", width: "280px", textAlign: "center" }}
          variant="body1"
        >
          {t("Do You Want")}
        </Typography>
        <Stack direction={"row"} alignItems={"start"} gap={"10px"}>
          <TextField
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={reasonCancelAppointment || ""}
            placeholder="Enter Cancelled Reason"
            onChange={(e) => setReasonCancelAppointment(e.target.value)}
            sx={{ boxShadow: 1, width: "300px" }}
          />
        </Stack>

        <Box color={"#777"} sx={{ textAlign: "center" }}>
          {t("terms")}
          <Link href={"/Term&Condition"} className="text-blue-500">
            {t("link terms")}
          </Link>
        </Box>
        <Button
          sx={{
            width: "300px",
            padding: "10px 20px",
            backgroundColor: "#c43838",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
            marginTop: "10px",
          }}
          onClick={handleCancelAppointmend}
        >
          {t("cancel appointment")}
        </Button>
        <Button
          sx={{
            width: "300px",
            padding: "10px 20px",
            backgroundColor: "backGround.main",
            borderRadius: "20px",
            color: "primary.main",
            fontWeight: "bold",
            fontSize: "1.2rem",
            textTransform: "none",
          }}
          onClick={handleClose}
        >
          {t("Cancel")}
        </Button>
      </Stack>
    </Modal>
  );
}
