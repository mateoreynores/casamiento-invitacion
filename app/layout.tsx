import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faustina y Mateo — 9 de mayo de 2026",
  description: "Invitación a nuestro casamiento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bellefair.variable} scroll-smooth`}>
      <body className="font-serif text-ink antialiased">{children}</body>
    </html>
  );
}
