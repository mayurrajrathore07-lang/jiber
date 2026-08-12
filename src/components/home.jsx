export default function Home() {
  return (
    <section className="bg-white px-4 py-15 text-black md:px-8 flex">
      <div className="mx-auto grid max-w-8x1 items-center gap-2 lg:grid-cols-2 ">


        <div className="max-w-8xl">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="whitespace-nowrap bg-linear-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Chat + Send Money
            </span>

            <span className="mt-2 block whitespace-nowrap">
              Worldwide for $1. Keep
            </span>

            <span className="block whitespace-nowrap">
              100% of What You Earn.
            </span>
          </h1>

          <ul className="mt-6 space-y-2 text-lg text-black-300 whitespace-nowrap">
            <li>
              • Send USDC worldwide with a $1 flat fee — built on Solana.
            </li>

            <li>
              • Your conversations now move money instantly and securely.
            </li>

            <li>
              • Exclusive digital economy for creators & fans. Built on
              Solana + USDC.
            </li>
          </ul>


          <div className="mt-2 rounded-3xl bg-white p-7 text-gray-900 shadow-xl">

            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Join the waitlist
              </h2>


            </div>

            <div className="mt-5 space-y-2">
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

          </div>
        </div>

      </div>

      <div className="h-160 w-200 mb-30px">
        <img src="/images/home.png" alt="Home preview" className="h-auto w-full" />
      </div>
    </section>
  );
}

