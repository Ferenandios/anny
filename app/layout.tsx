import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anny is my favorite streamer",
  description: "I love my job",
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
