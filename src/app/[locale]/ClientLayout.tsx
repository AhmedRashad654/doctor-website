"use client";
import { useEffect } from "react";
import { fetchUser } from "@/redux/features/userSlice";
import Cookies from "js-cookie";
import { fetchWalletUser } from "@/redux/features/walletUserSlice";
import { useAppDispatch } from "@/redux/hooks";
import { fetchSavedDoctor } from "@/redux/features/savedDoctorsSlice";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const userId = Cookies.get("userId_Doctor");
  useEffect(() => {
    if (userId) {
      dispatch(fetchUser());
      dispatch(fetchWalletUser());
      dispatch(fetchSavedDoctor());
    }
  }, [userId, dispatch]);

  return <>{children}</>;
}
