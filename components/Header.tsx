'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useUser, useClerk } from '@clerk/nextjs';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const { isLoaded, isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Tasks', href: '/tasks' },
  ];

  const userName = user?.fullName || 'Student';
  const userEmail = user?.primaryEmailAddress?.emailAddress || '';

  const initials = user
    ? `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() ||
      userEmail.substring(0, 2).toUpperCase()
    : 'ST';

  return (
    <header className="bg-[#4E4187] text-white p-4 shadow-md flex justify-between items-center z-30 relative">

      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>

        <h1 className="font-sans font-bold text-2xl tracking-wide">
          StudyPlanner
        </h1>

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

      <div className="relative">
        {!isLoaded ? (
          <span className="text-sm">Loading...</span>
        ) : isSignedIn && user ? (
          <>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 hover:bg-[#3b3170] p-2 rounded-lg transition-colors focus:outline-none"
            >
              <span className="text-sm font-medium hidden sm:inline">
                {userName}
              </span>

              <div className="w-8 h-8 bg-[#2EBFA5] rounded-full border-2 border-white flex items-center justify-center text-sm font-bold">
                {initials}
              </div>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-gray-800 z-40">
                <div className="px-4 py-2 border-b border-gray-100 mb-1">
                  <p className="text-sm font-semibold truncate">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {userEmail}
                  </p>
                </div>

                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-600 font-medium"
                  onClick={() => signOut({ redirectUrl: '/sign-in' })}
                >
                  Sign Out
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/sign-in"
              className="text-sm font-medium hover:text-[#7DDE92] transition-colors"
            >
              Sign In
            </Link>

            <Link
              href="/sign-up"
              className="bg-[#2EBFA5] text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#269e89] transition-colors"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
