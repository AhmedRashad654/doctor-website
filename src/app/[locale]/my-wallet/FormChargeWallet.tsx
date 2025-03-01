"use client";
import { AppDispatch } from "@/redux/store";
import { handleSubmitWallet } from "@/services/api/wallet/wallet";
import { Button, TextField, Typography } from "@mui/material";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useContextState } from "../../../../context/ContextUseState";
export default function FormChargeWallet() {
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState<number>(0);
  const {setOpen} = useContextState()
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <form
      onSubmit={(e) =>
        handleSubmitWallet(
          e,
          stripe,
          elements,
          CardNumberElement,
          amount,
          setOpen,
          setLoading,
          dispatch
        )
      }
      className="bg-white flex gap-3 flex-col shadow-lg rounded-lg p-6 md:w-[450px] w-[340px] mx-auto"
    >
      <Typography variant="h6">Enter Card Information</Typography>

      <label className="block text-sm font-medium text-gray-700">
        Card Number
      </label>
      <div className="border p-3 rounded-md mb-2">
        <CardNumberElement className="w-full" />
      </div>
      <label className="block text-sm font-medium text-gray-700">
        Expiry Date
      </label>
      <div className="border p-3 rounded-md mb-2">
        <CardExpiryElement className="w-full" />
      </div>
      <label className="block text-sm font-medium text-gray-700">CVC</label>
      <div className="border p-3 rounded-md mb-2">
        <CardCvcElement className="w-full" />
      </div>
      <label className="block text-sm font-medium text-gray-700">amount</label>
      <div className=" rounded-md mb-2">
        <TextField
          type="number"
          placeholder="amount"
          fullWidth
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setAmount(e.target.value === "" ? 0 : parseFloat(e.target.value))
          }
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#56a756",
          color: "white",
          padding: "10px",
          fontWeight: "semibold",
          textTransform: "none",
        }}
        disabled={!stripe || loading}
      >
        {loading ? "processing..." : "Pay Now"}
      </Button>
    </form>
  );
}
