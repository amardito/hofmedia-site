import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hofmedia - Welcome",
  description: "Hofmedia landing page - Your digital media partner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
