import Footer from "@/components/Landing/Footer";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pragati.care",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-nt-somic text-primary-text">
        {children}
        <Footer />
      </body>
    </html>
  );
}