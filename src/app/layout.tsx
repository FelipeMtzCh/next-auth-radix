/*Imports from Radix UI*/
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <Theme appearance="dark">{children}</Theme>
      </body>
    </html>
  );
}
