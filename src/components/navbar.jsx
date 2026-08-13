const navItems = ["Messaging", "Money", "Monetization", "Contact Us", "FAQ"];

export default function Navbar() {
  return (
    <header className="bg-[#f8f8f8]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-500">
            <span className="text-lg font-bold text-black">••</span>
          </div>

          <span className="text-3xl font-black text-purple-500">
            jiber
          </span>
        </div>


        <div className="hidden gap-8 text-black md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="transition hover:text-purple-400"
            >
              {item}
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}