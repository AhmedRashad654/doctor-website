"use client";
import { usePathname } from "next/navigation";
export default function NavbarAndFooterVisibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification");

  if (isAuthPage) return null;

  return <>{children}</>;
}
