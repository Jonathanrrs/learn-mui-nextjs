import type { Metadata } from "next";
import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import { redirect } from "next/navigation";
import { MyDrawerAlways } from "@/components/navigation";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/providers/AuthProvider";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn MUI",
  description: "Project to learn Next JS with MUI",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <MyDrawerAlways username={session?.user?.name || null}>
            {children}
          </MyDrawerAlways>
        </body>
      </html>
    </AuthProvider>
  );
}
