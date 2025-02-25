import { request } from "@/axios/axios";
import Cookies from "js-cookie";
import { FormEvent, Dispatch, SetStateAction } from "react";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import { CardNumberElementComponent } from "@stripe/react-stripe-js";
import { setWallet } from "@/redux/features/walletUserSlice";
import { Dispatch as DispatchRedux } from "@reduxjs/toolkit";
import { addWalletHistory } from "@/redux/features/walletHistorySlice";
/*
 * add money in wallet part api
 */
const addMoneyInWallet = async (amount: number) => {
  const userId = Cookies.get("userId_Doctor");
  const response = await request.post(
    `/user/wallet/loadWallet?userId=${userId}&amount=${amount}&paymentGateway=2`,
    {
      headers: {
        key: process.env.NEXT_PUBLIC_SECRET_KEY || "",
      },
    }
  );
  return response?.data;
};
/*
 * handle submit wallet
 */
export const handleSubmitWallet = async (
  e: FormEvent,
  stripe: Stripe | null,
  elements: StripeElements | null,
  CardNumberElement: CardNumberElementComponent,
  amount: number,
  setOpen: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  dispatch: DispatchRedux
) => {
  e.preventDefault();
  if (!stripe || !elements) {
    alert("Stripe is not ready yet.");
    return;
  }

  const cardNumberElement = elements.getElement(CardNumberElement);
  if (!cardNumberElement) return;
  setLoading(true);

  try {
    if (amount === 0) {
      return alert("Amount is required");
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardNumberElement,
    });

    if (error) {
      alert(error.message);
    } else {
      const response = await addMoneyInWallet(amount);
      if (response) {
        alert("Payment success");
        setOpen(false);
        dispatch(setWallet(response?.data));
        dispatch(addWalletHistory(response?.history));
      } else {
        alert("Payment failed");
      }
    }
  } catch {
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
};
