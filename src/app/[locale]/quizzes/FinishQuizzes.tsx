import { useRouter } from "@/i18n/routing";
import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Image from "next/image";
import success from "../../../../public/assets/images/success.png";
export default function FinishQuizzes({
  showFinishQuizzes,
}: {
  showFinishQuizzes: boolean;
  }) {
  
  const [open, setOpen] = useState(false);
  const t = useTranslations("quizzes");

  const router = useRouter();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    router.push("/");
  };
  useEffect(() => {
    if (showFinishQuizzes) {
      handleOpen();
    }
  }, [showFinishQuizzes]);
  if (!showFinishQuizzes) return;
  return (
    <Modal keepMounted open={open} onClose={handleClose}>
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
        <Image
          src={success}
          alt={"success"}
        className="w-[70px] h-[70px] mb-3"
        />
        <Typography variant="h4" sx={{ color: "primary.main" }}>
          {t("cangratulations")}
        </Typography>

        <Typography sx={{ color: "secondary.main" }} variant="h6">
          {t("passed")}
        </Typography>
      </Stack>
    </Modal>
  );
}
