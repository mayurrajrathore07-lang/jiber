import Link from "next/link";

const navItems = [
  { name: "Messaging", href: "/#messaging" },
  { name: "Money", href: "/#money" },
  { name: "Monetization", href: "/#monetization" },
  { name: "Contact Us", href: "/#contact" },
  { name: "FAQ", href: "/#faq" },
];

export default function Navbar() {
  return (
    <header className="bg-[#f8f8f8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500">
            <span className="text-lg font-bold text-black">••</span>
          </div>

          <span className="text-3xl font-black text-purple-500">
            jiber
          </span>
        </Link>

        <div className="hidden gap-8 text-black md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition hover:text-purple-400"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}