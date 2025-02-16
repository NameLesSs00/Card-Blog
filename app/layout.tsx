import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog card",
  description: "when you want something you must work hard to get it!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
