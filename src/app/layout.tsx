import type { Metadata } from "next";
import "./(frontend)/[locale]/globals.css";

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
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
