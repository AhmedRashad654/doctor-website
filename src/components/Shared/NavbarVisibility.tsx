"use client";
import { usePathname } from "next/navigation";
export default function NavbarVisibility({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage =
    pathname.includes("/login") ||
    pathname.includes("/register") ||
    pathname.includes("/verification") ||
    pathname.includes("/profile-doctor") ||
    pathname.includes("/chat");
  

  if (isAuthPage) return null;

  return <>{children}</>;
}
