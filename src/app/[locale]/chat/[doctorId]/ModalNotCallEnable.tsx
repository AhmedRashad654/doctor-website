import { useRouter } from "@/i18n/routing";
import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useState } from "react";
export default function ModalNotCallEnable({ enable }: { enable: boolean }) {
  const [openModalEnableCall, setOpenModalEnableCall] =
    useState<boolean>(enable);
  const t = useTranslations("chat");
  const router = useRouter();
  const handleClose = () => {
    setOpenModalEnableCall(true);
    router.push("/");
  };
  return (
    <Modal keepMounted open={!openModalEnableCall} onClose={handleClose}>
      <Stack
        alignItems={"center"}
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
        <Typography
          variant="h4"
          sx={{ color: "primary.main", textAlign: "center" }}
        >
          {t("not enable call")}
        </Typography>
      </Stack>
    </Modal>
  );
}
