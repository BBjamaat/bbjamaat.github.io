import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "@/components/templates/footer";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "BB Jamaat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" typeof="image/png" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased mx-auto w-full max-w-3xl max-md:px-4 max-md:max-w-full",
          fontSans.variable,
        )}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
