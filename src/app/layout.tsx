import { Mulish } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Metadata } from "next";

const mulish = Mulish({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MRO Gulf",
  description:
    "We are formerly known as Volga-Dnepr Gulf (UAE) (FZC), we have rebranded ourselves as MRO Gulf (FZC) in 2022. With this transformation, we continue our legacy of excellence in the aviation industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} min-w-[375px]`}>
        <Nav />

        {children}
      </body>
    </html>
  );
}
