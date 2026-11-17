import type { Metadata } from "next";
import { Inter, Rubik, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
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
    <html lang="en">
      <body className={`${inter.variable} ${rubik.variable} ${alfaSlabOne.variable} font-sans bg-[#F8FFE5] text-gray-900 h-screen flex flex-col overflow-hidden`}>
        <Header user={mockUser} />
        
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-[#F8FFE5]">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}


/*
import type { Metadata } from "next";
import { Inter, Rubik, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
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
      className={`${inter.variable} ${rubik.variable} ${alfaSlabOne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
*/