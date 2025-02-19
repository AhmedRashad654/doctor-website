"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "@/redux/features/userSlice";
import { AppDispatch } from "@/redux/store";
import Cookies from "js-cookie";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const dispatch = useDispatch<AppDispatch>();
  const userId = Cookies.get("userId_Doctor");
  useEffect(() => {
    if (userId) {
      dispatch(fetchUser());
    }
  }, [dispatch, userId]);

  return <>{children}</>;
}
