export default function Home() {
  return (
    <section className="bg-white px-4 py-12 text-black md:px-8 flex">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">

        
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold leading-tight md:text-6xl">
            <span className="bg-linear-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Chat + Send Money
            </span>

            <span className="mt-3 block">
              Worldwide for $1. Keep
            </span>

            <span className="block">
              100% of What You Earn.
            </span>
          </h1>

          <ul className="mt-8 space-y-4 text-lg text-black-300">
            <li>
              • Send USDC worldwide with a $1 flat fee — built on Solana,
              non-custodial & instant.
            </li>

            <li>
              • Your conversations now move money instantly and securely.
            </li>

            <li>
              • Exclusive digital economy for creators & fans. Built on
              Solana + USDC.
            </li>
          </ul>

          
          <div className="mt-8 rounded-3xl bg-white p-7 text-gray-900 shadow-xl">

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Join the waitlist
              </h2>

              <span className="text-sm">
                ! We don't spam
              </span>
            </div>

            <div className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border px-5 py-4 outline-none focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-full border px-5 py-4 outline-none focus:border-purple-500"
              />
            </div>

            <button className="mt-5 w-full rounded-full bg-linear-to-r from-purple-400 to-blue-600 py-4 text-lg font-semibold text-white hover:opacity-90">
              Join Waitlist
            </button>

            <div className="mt-5 flex items-center justify-between">
              <div className="flex">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
                  ≈
                </div>

                <div className="-ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-white">
                  $
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
                  $1
                </span>

                <span>Fee Instant Transfer</span>
              </div>
            </div>
          </div>
        </div>

    
        <div className="flex justify-center">
          <div className="relative h-'540px' w-full max-w-lg overflow-hidden rounded-3xl bg-linear-to-br from-purple-950 via-gray-900 to-black shadow-2xl">

            <div className="absolute left-6 right-6 top-6 h-20 rounded-2xl bg-white/5" />

            <div className="absolute left-10 top-20 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500 text-2xl font-bold">
              $
            </div>

            <div className="absolute right-10 top-32 flex h-28 w-28 items-center justify-center rounded-3xl bg-linear-to-br from-purple-500 to-blue-500 text-5xl font-bold">
              J
            </div>

            <div className="absolute bottom-10 left-8 right-8 rounded-3xl bg-gray-900 p-6">

              <div className="flex justify-between text-sm text-gray-400">
                <span>Instant transfer</span>
                <span>Today</span>
              </div>

              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-4xl font-bold">
                    $124
                  </p>

                  <p className="mt-1 text-sm text-green-400">
                    Confirmed
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-xl text-green-400">
                  ✓
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

       <div className="h-120 w-120">
        <img src="/images/home.png" alt="Home preview" className="h-auto w-full" />
      </div>
    </section>
  );
}

