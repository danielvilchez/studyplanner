import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "StudyPlanner",
  description: "Organize your academic tasks, assignments, and deadlines in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.variable} font-sans bg-[#F8FFE5] text-gray-900 h-screen flex flex-col overflow-hidden`}>
          <Suspense fallback={<div className="p-4">Loading...</div>}>
            <Header />
          </Suspense>

          <div className="flex flex-1 overflow-hidden">
            <Suspense fallback={<div className="p-4">Loading...</div>}>
              <Sidebar />
            </Suspense>

            <div className="flex-1 flex flex-col overflow-hidden">
              <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F8FFE5]">
                <Suspense fallback={<div className="p-4">Loading...</div>}>
                  {children}
                </Suspense>
              </main>
              <Footer />
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
