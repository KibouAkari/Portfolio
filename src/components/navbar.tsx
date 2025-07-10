"use client";

import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "GitHub", href: "/github" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full flex justify-center py-6 bg-transparent">
      <ul className="flex text-lg font-medium">
        {navItems.map(({ label, href }, idx) => (
          <li
            key={label}
            style={{ marginRight: idx !== navItems.length - 1 ? "25px" : undefined, marginTop: "45px" }}
          >
            <Link
              href={href}
              className="relative group px-2 md:px-3 py-1 inline-block"
            >
              <span className="text-white group-hover:text-indigo-400 transition">
                {label}
              </span>
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
