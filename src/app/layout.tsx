import { MyDrawerAlways } from "@/components/navigation";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn MUI",
  description: "Project to learn Next JS with MUI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyDrawerAlways>{children}</MyDrawerAlways>
      </body>
    </html>
  );
}
