'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'My Tasks', href: '/tasks' },
  ];

  return (
    <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 h-full flex-col shrink-0">
      <nav className="flex flex-col p-4 space-y-2">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={`px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive
                  ? 'bg-[#4E4187] text-white'
                  : 'text-gray-800 hover:bg-[#F8FFE5] hover:text-[#3083DC]'
              }`}
            >
              {link.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}