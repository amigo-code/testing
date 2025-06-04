import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { LayoutProvider } from "@/components/layout/layout-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuthPage = children?.toString().includes("AuthLayout");

  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased pattern`}>
        {isAuthPage ? children : <LayoutProvider>{children}</LayoutProvider>}
        <Toaster />
      </body>
    </html>
  );
}