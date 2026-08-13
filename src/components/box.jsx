'use client';

export default function Box() {
  return (
    <section className="my-12 mx-4 sm:mx-6 md:mx-auto max-w-5xl rounded-[28px] bg-[#0b0718] px-6 py-10 text-center text-white shadow-xl md:px-12 md:py-16">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-pink-500 text-2xl font-bold">
          ✦
        </div>
        <h3 className="text-2xl font-black sm:text-3xl md:text-4xl leading-tight">
          Ready to join the exclusive digital economy?
        </h3>
        <p className="mt-3 text-sm sm:text-base text-slate-300">
          Join the platform early and unlock new ways to connect, earn, and grow.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-gray-700 bg-white/10 px-5 py-3.5 text-white placeholder-gray-400 outline-none focus:border-purple-500 transition"
          />
          <button className="w-full sm:w-auto shrink-0 rounded-full bg-linear-to-r from-violet-500 to-pink-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg hover:opacity-90 transition">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}

