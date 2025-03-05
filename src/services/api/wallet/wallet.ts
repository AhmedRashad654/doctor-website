import { request } from "@/axios/axios";
import Cookies from "js-cookie";
import { FormEvent, Dispatch, SetStateAction } from "react";
import { Stripe, StripeElements } from "@stripe/stripe-js";
import { CardNumberElementComponent } from "@stripe/react-stripe-js";
import { QueryClient } from "@tanstack/react-query";
import { Dayjs } from "dayjs";

/*
 * get Money Walley
 */
export const getMoneyWallet = async () => {
  const userId = Cookies.get("userId_Doctor");
  const response = await request.get(`/user/wallet?userId=${userId}`);
  return response.data?.data;
};
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
  setOpenFormChargeWallet: Dispatch<SetStateAction<boolean>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  queryClient: QueryClient
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
        setOpenFormChargeWallet(false);
        queryClient.invalidateQueries({ queryKey: ["getMoneyWallet"] });
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
/*
 * getWalletHistory
 */
export async function getWalletHistory(userId: string, selectedDate: Dayjs) {
  return await request.get(
    `/user/wallet/getWalletHistory?userId=${userId}&month=${selectedDate.format(
      "YYYY-MM"
    )}`
  );
}
