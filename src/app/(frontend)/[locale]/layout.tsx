import Footer from "@/src/components/Footer";
import NavBar from "@/src/components/NavBar";
import { routing } from "@/src/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import "./globals.css";

export const metadata: Metadata = {
  title: "DipMax Software",
  description: "DipMax Software",
  generator: "DipMax Software",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
        <body>
          {/* Navbar */}
          <div className="flex min-h-screen flex-col">
          <NavBar />
          <div className="flex-1">
            {children}
          </div>
          {/* Footer */}
          <Footer />

          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
