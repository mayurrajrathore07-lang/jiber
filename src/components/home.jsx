import homeImg from "../../public/images/home.png";

export default function Home() {
  return (
    <section className="bg-white px-4 py-12 text-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div className="w-full">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            <span className="bg-linear-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Chat + Send Money
            </span>
            <span className="mt-2 block">
              Worldwide for $1. Keep 100% of What You Earn.
            </span>
          </h1>

          <ul className="mt-6 space-y-3 text-base text-gray-700 sm:text-lg">
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Send USDC worldwide with a $1 flat fee — built on Solana.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Your conversations now move money instantly and securely.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-600 font-bold">•</span>
              <span>Exclusive digital economy for creators & fans. Built on Solana + USDC.</span>
            </li>
          </ul>

          <div className="mt-8 rounded-3xl bg-white p-6 text-gray-900 shadow-xl border border-gray-100 sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Join the waitlist</h2>
            </div>

            <div className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-gray-200 px-5 py-3.5 outline-none focus:border-purple-500 transition"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-full border border-gray-200 px-5 py-3.5 outline-none focus:border-purple-500 transition"
              />
            </div>

            <button className="mt-5 w-full rounded-full bg-linear-to-r from-purple-400 to-blue-600 py-3.5 text-lg font-semibold text-white transition hover:opacity-90 shadow-md">
              Join Waitlist
            </button>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <img
            src={homeImg.src}
            alt="Home preview"
            className="h-auto w-full max-w-md lg:max-w-xl object-contain drop-shadow-md rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}


