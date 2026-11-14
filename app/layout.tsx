import type { Metadata } from "next";
import { Rubik, Alfa_Slab_One } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const alfa = Alfa_Slab_One({ weight: "400", subsets: ["latin"], variable: "--font-alfa" });

export const metadata: Metadata = {
  title: "StudyPlanner",
  description: "Organize your academic tasks, assignments, and deadlines in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // This is the mock user. In Week 5, we will fetch this from Clerk!
  const mockUser = {
    name: "Monday Ogedengbe",
    email: "mogedengbe@byupathway.edu",
    initials: "MO"
  };

  return (
    <html lang="en">
      <body className={`${rubik.variable} ${alfa.variable} font-sans bg-[#F8FFE5] text-gray-900 h-screen flex flex-col overflow-hidden`}>
        
        {/* Pass the user to the Header */}
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