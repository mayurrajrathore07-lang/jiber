export default function Home() {
  return (
    <section className="bg-[#0a0a0d] px-4 pb-16 pt-12 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="mx-auto max-w-[560px] lg:mx-0">
          <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.06em] md:text-6xl">
            <span className="bg-gradient-to-r from-[#d875f5] to-[#4b3cff] bg-clip-text text-transparent">
              Chat + Send Money
            </span>
            <span className="mt-3 block text-white">Worldwide for $1. Keep</span>
            <span className="block text-white">100% of What You Earn.</span>
          </h1>

          <ul className="mt-8 space-y-4 text-lg text-white/80">
            <li>• Send USDC worldwide with a $1 flat fee — built on Solana, non-custodial & instant.</li>
            <li>• Your conversations now move money instantly and securely.</li>
            <li>• Exclusive digital economy for creators & fans. Built on Solana + USDC.</li>
          </ul>

          <div className="mt-8 rounded-[30px] border border-white/10 bg-[#fafafa] p-7 text-[#07172b] shadow-2xl shadow-violet-900/20">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold">Join the waitlist</h2>
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">!</span>
                We don't spam
              </div>
            </div>

            <div className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-violet-500"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-violet-500"
              />
            </div>

            <button className="mt-5 w-full rounded-full bg-gradient-to-r from-[#df7af5] to-[#4035ff] py-4 text-lg font-semibold text-white transition hover:opacity-90">
              Join Waitlist
            </button>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">≈</div>
                <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-sm font-bold text-white">$</div>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07172b] text-xs font-bold text-white">$1</span>
                <span>Fee Instant Transfer</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-[560px] justify-center lg:justify-end">
          <div className="relative h-[540px] w-full max-w-[500px] overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#1d1a2b] via-[#13111d] to-[#09090d] shadow-[0_30px_90px_rgba(92,71,255,0.35)]">
            <div className="absolute left-6 right-6 top-6 h-20 rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute left-10 top-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/90 text-2xl font-bold text-white">$</div>
            <div className="absolute right-10 top-32 flex h-28 w-28 items-center justify-center rounded-[30px] bg-gradient-to-br from-violet-500 to-blue-500 text-5xl font-black text-white shadow-lg">J</div>
            <div className="absolute bottom-10 left-8 right-8 rounded-[28px] border border-white/10 bg-[#10151d] p-6">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Instant transfer</span>
                <span>Today</span>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-black text-white">$124</p>
                  <p className="mt-1 text-sm text-emerald-400">Confirmed</p>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-xl text-emerald-400">✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}