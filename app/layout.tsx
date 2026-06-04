import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kyiv Tennis School",
  description: "Premium tennis coaching, facilities, programs, pricing, and trial booking in Kyiv.",
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
