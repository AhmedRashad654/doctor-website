"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Cookies from "js-cookie";
import { messaging } from "@/lib/firebase";
import { getToken } from "firebase/messaging";
interface ContextType {
  fcmToken: string | null;
  requestPermission: () => void;
}
const ContextFirebase = createContext<ContextType | undefined>(undefined);
function ContextProviderFirebase({ children }: { children: ReactNode }) {
  const [fcmToken, setFcmToken] = useState<string | null>(null);
  const requestPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );
        const token = await getToken(messaging, {
          vapidKey:process.env.NEXT_PUBLIC_VAPIAD_KEY,
          serviceWorkerRegistration: registration,
        });

        if (token) {
          Cookies.set("fcmToken", token, { expires: 7, secure: true });
          setFcmToken(token);
        } else {
          console.log("No registration token available.");
        }
      } else {
        console.warn("Permission not granted for notifications.");
      }
    } catch (error) {
      console.error("Error getting FCM token:", error);
    }
  };
  useEffect(() => {
    const savedToken = Cookies.get("fcmToken");
    if (savedToken) {
      setFcmToken(savedToken);
    }
  }, []);
  return (
    <ContextFirebase.Provider value={{ fcmToken, requestPermission }}>
      {children}
    </ContextFirebase.Provider>
  );
}
function useContextFirebase() {
  const context = useContext(ContextFirebase);
  if (context === undefined) {
    throw new Error("problem in context");
  }
  return context;
}
export { ContextProviderFirebase, useContextFirebase };
