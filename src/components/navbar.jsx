'use client';
import vector from "../../public/images/Vector.png";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Messaging", href: "/#messaging" },
  { name: "Money", href: "/#money" },
  { name: "Monetization", href: "/#monetization" },
  { name: "Contact Us", href: "/#contact" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f8f8]/95 backdrop-blur-md border-b border-gray-100 font-plus-jakarta">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
        <Link href="/" className="flex items-center gap-2.5">
          <img
            className="h-8 w-auto sm:h-10 object-contain"
            src={vector.src}
            alt="Jiber Logo"
          />

        </Link>


        <div className="hidden gap-8 text-black md:flex font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-purple-600"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-[#f8f8f8] px-6 py-4 md:hidden shadow-lg">
          <div className="flex flex-col space-y-4 text-black font-medium">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="py-1 transition hover:text-purple-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}