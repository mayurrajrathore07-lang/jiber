export default function Home() {
  return (
    <main className="min-h-screen bg-black px-4 py-10 text-[#07172b]">
      <div className="mx-auto max-w-'530px'">
        
        
        <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">
          <span className="bg-linear-to-r from-[#d875f5] to-[#4b3cff] bg-clip-text text-transparent">
            Chat + Send Money
          </span>

          <br />

          <span>
            Worldwide for $1. Keep
          </span>

          <br />

          <span>
            100% of What You Earn.
          </span>
        </h1>

        {/* Points */}
        <ul className="mt-8 space-y-3 text-[18px] leading-6">
          <li>
            • Send USDC worldwide with a $1 flat fee — built on
            <br />
                   Solana, non-custodial & instant.
          </li>

          <li>
            • Your conversations now move money instantly and securely.
          </li>

          <li>
            • Exclusive digital economy for creators & fans. Built on
            Solana + USDC.
          </li>
        </ul>

    
        <div className="mt-8 rounded-[30px] border border-gray-300 bg-[#fafafa] p-8 shadow-lg">
          
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">
              Join the waitlist
            </h2>

            <div className="flex items-center gap-1 text-sm text-gray-800">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-xs text-white">
                !
              </span>
              We don't spam
            </div>
          </div>

    
          <div className="mt-5 space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-purple-500"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full rounded-full border border-gray-300 bg-white px-5 py-4 text-gray-800 outline-none placeholder:text-gray-400 focus:border-purple-500"
            />
          </div>

    
          <button className="mt-4 w-full rounded-full bg-linear-to-r from-[#df7af5] to-[#4035ff] py-4 text-lg font-semibold text-white transition hover:opacity-90">
            Join Waitlist
          </button>

          
          <div className="mt-4 flex items-center justify-between">
            
            <div className="flex">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs text-white">
                ≋
              </div>

              <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-sm font-bold text-white">
                $
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#07172b] text-xs font-bold text-white">
                $1
              </span>

              <span>Fee Instant Transfer</span>
            </div>

          </div>
        </div>
      </div>

      <div><img src="" alt="" /></div>
    </main>
  );
}