import { NextIntlClientProvider } from "next-intl";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Locale, routing } from "@/i18n/routing";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import Navbar from "@/components/HomePage/Navbar";
import Footer from "@/components/HomePage/Footer";
import FooterVisibility from "@/components/Shared/FooterVisibilty";
import NavbarVisibility from "@/components/Shared/NavbarVisibility";
import { ContextProvider } from "../../../context/ContextQuestion";

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
            <ContextProvider>
              <ThemeProvider theme={theme}>
                <NavbarVisibility>
                  <Navbar locale={locale} />
                </NavbarVisibility>
                {children}
                <FooterVisibility>
                  <Footer />
                </FooterVisibility>
              </ThemeProvider>
            </ContextProvider>
          </NextIntlClientProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
