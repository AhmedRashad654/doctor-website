import { useRouter } from "@/i18n/routing";
import { Stack } from "@mui/material";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useTranslations } from "next-intl";
import Image from "next/image";
import success from "../../../../../public/assets/images/success.png";
import { Dispatch, SetStateAction } from "react";
export default function FinishQuizzes({
  showFinishQuizzes,
  setShowFinishQuizzes,
}: {
  showFinishQuizzes: boolean;
  setShowFinishQuizzes: Dispatch<SetStateAction<boolean>>;
}) {
  const t = useTranslations("quizzes");

  const router = useRouter();
  const handleClose = () => {
    setShowFinishQuizzes(false);
    router.push("/");
  };

  if (!showFinishQuizzes) return;
  return (
    <Modal keepMounted open={showFinishQuizzes} onClose={handleClose}>
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
