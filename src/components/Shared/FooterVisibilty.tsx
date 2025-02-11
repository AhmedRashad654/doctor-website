"use client";
import { usePathname } from "next/navigation";
export default function FooterVisibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification") ||
    pathname.includes("/chat");

  if (isAuthPage) return null;

  return <>{children}</>;
}
