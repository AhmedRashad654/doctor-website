"use client";
import { useEffect } from "react";
import { fetchUser } from "@/redux/features/userSlice";
import { fetchWalletUser } from "@/redux/features/walletUserSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchSavedDoctor } from "@/redux/features/savedDoctorsSlice";
import Cookies from "js-cookie";
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.user);
  const userId = Cookies.get("userId_Doctor");
  useEffect(() => {
    if (userId) {
      dispatch(fetchUser());
      dispatch(fetchWalletUser());
      dispatch(fetchSavedDoctor());
    }
  }, [dispatch, user?._id, userId]);

  return <>{children}</>;
}
