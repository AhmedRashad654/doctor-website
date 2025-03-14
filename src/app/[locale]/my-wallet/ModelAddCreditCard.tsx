"use client";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Modal, Stack } from "@mui/material";
import FormChargeWallet from "./FormChargeWallet";
import { useCallback } from "react";
import { useContextState } from "../../../../context/ContextUseState";
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PK_STRIPE || "");
export default function ModelAddCreditCard() {
  const { openFormChargeWallet, setOpenFormChargeWallet } = useContextState();
  const handleClose = useCallback(
    () => setOpenFormChargeWallet(false),
    [setOpenFormChargeWallet]
  );
  return (
    <Modal open={openFormChargeWallet} onClose={handleClose} disableEnforceFocus>
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ minHeight: "100vh" }}
        onClick={handleClose}
      >
        <div onClick={(e) => e.stopPropagation()}>
          <Elements stripe={stripePromise}>
            <FormChargeWallet />
          </Elements>
        </div>
      </Stack>
    </Modal>
  );
}
