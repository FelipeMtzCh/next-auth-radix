/*Imports from Radix UI*/
import { Theme } from "@radix-ui/themes";
import Navbar from "@/components/auth/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ContextProvider from "@/context/GlobalContext";
import "./globals.css";
import "@radix-ui/themes/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hoop",
  description: "German snacks right to your doorste",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <Theme appearance="dark">
            <Navbar />
            {children}
          </Theme>
        </ContextProvider>
      </body>
    </html>
  );
}
