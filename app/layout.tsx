import type { Metadata } from "next";
import { Inter, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const alfaSlabOne = Alfa_Slab_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-alfa-slab-one"
});

export const metadata: Metadata = {
  title: "StudyPlanner",
  description: "Organize your academic tasks, assignments, and deadlines in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mockUser = {
    name: "Monday Ogedengbe",
    email: "monday@example.com",
    initials: "MO"
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${alfaSlabOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}