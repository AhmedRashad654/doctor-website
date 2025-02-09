import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "@/components/HomePage/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Footer from "@/components/HomePage/Footer";
import NavbarAndFooterVisibility from "@/components/Shared/NavbarAndFooterVisibility";

export const metadata = {
  title: "clears mind",
  description: "website to book appointment with doctor",
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;
  const dir = locale === "ar" ? "rtl" : "ltr";
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} dir={dir}>
      <body>
        <AppRouterCacheProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider theme={theme}>
              <NavbarAndFooterVisibility>
                <Navbar locale={locale} />
              </NavbarAndFooterVisibility>
              {children}
              <NavbarAndFooterVisibility>
                <Footer />
              </NavbarAndFooterVisibility>
              <LanguageSwitcher />
            </ThemeProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
