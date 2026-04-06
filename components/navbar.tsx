"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:top-5">
      <nav className="mx-auto mt-2 flex w-fit items-center rounded-full border border-white/60 bg-white/55 px-2 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl ring-1 ring-black/5">
        <ul className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium tracking-tight transition-all duration-300 ${
                    isActive
                      ? "bg-white/95 text-black shadow-[0_6px_16px_rgba(0,0,0,0.10)] ring-1 ring-black/5"
                      : "text-gray-500 hover:bg-white/70 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
