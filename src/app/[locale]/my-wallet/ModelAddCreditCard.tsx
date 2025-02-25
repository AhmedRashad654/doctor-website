"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Modal, Stack } from "@mui/material";
import FormChargeWallet from "./FormChargeWallet";
import { useCallback } from "react";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PK_STRIPE || "");
export default function ModelAddCreditCard({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = useCallback(() => setOpen(false), [setOpen]);
  return (
    <Modal open={open} onClose={handleClose} disableEnforceFocus>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
        onClick={handleClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Elements stripe={stripePromise}>
            <FormChargeWallet setOpen={setOpen} />
          </Elements>
        </div>
      </Stack>
    </Modal>
  );
}
