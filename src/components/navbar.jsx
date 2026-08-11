const navItems = ["Messaging", "Money", "Monetization", "Contact Us", "FAQ"];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#0f1117]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#8b5cf6] to-[#a855f7] p-2 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
            <div className="flex items-center gap-[2px]">
              <span className="h-2.5 w-2.5 rounded-full bg-white/95" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/90" />
            </div>
          </div>
          <span className="text-4xl font-black tracking-[-0.08em] text-[#8b5cf6]">jiber</span>
        </div>

        <div className="hidden items-center gap-10 text-lg text-white/80 md:flex">
          {navItems.map((item) => (
            <a key={item} href="#" className="transition hover:text-white">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
