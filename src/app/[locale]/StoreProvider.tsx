"use client";
import { AppStore, makeStore } from "@/redux/store";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import Cookies from "js-cookie";
import { useRouter } from "@/i18n/routing";
export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const userId = Cookies.get("userId_Doctor");
  const router = useRouter();
  useEffect(() => {
      if (!userId) {
        router.push("/login");
      }
  },[router, userId])

  const storeRef = useRef<AppStore | undefined>(undefined);
  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
