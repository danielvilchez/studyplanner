'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  user?: { name: string; email: string; initials: string };
}

export default function Header({ 
  user = { name: "Guest User", email: "guest@example.com", initials: "GU" } 
}: HeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Tasks', href: '/tasks' },
  ];

  return (
    <header className="bg-[#4E4187] text-white p-4 shadow-md flex justify-between items-center z-30 relative">
      
      {/* Left side: Hamburger (Mobile) + Logo */}
      <div className="flex items-center gap-4 relative">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
        <h1 className="font-heading text-2xl tracking-wide">StudyPlanner</h1>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 mt-4 w-48 bg-white text-gray-800 rounded-lg shadow-xl border border-gray-200 py-2 md:hidden flex flex-col z-40">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 font-medium transition-colors ${
                    isActive
                      ? 'bg-[#4E4187] text-white' 
                      : 'text-gray-800 hover:bg-[#F8FFE5] hover:text-[#3083DC]' 
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>

      {/* Right side: User Dropdown */}
      <div className="relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 hover:bg-[#3b3170] p-2 rounded-lg transition-colors focus:outline-none"
        >
          <span className="text-sm font-medium hidden sm:inline">{user.name}</span>
          <div className="w-8 h-8 bg-[#2EBFA5] rounded-full border-2 border-white flex items-center justify-center text-sm font-bold">
            {user.initials}
          </div>
        </button>

        {/* User Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-gray-800 z-40">
            <div className="px-4 py-2 border-b border-gray-100 mb-1">
              <p className="text-sm font-semibold truncate">{user.name}</p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>
            <button 
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600 font-medium"
              onClick={() => alert("Clerk Sign Out will go here")}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </header>
  );
}