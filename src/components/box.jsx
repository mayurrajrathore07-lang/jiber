'use client;'



export default function box() {
  return (
    <section className="mb-16 rounded-[28px] bg-[#0b0718] px-4 py-12 text-center text-white shadow-lg md:px-8 ml-40 mr-40">
      <div className="mx-auto max-w-xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-violet-500 to-pink-500 text-2xl">

        </div>
        <h3 className="text-3xl font-black md:text-4xl">Ready to join the exclusive digital economy?</h3>
        <input
          type="text"
          placeholder="Email"
          className="w-full rounded-full border px-4 py-3 outline-none focus:border-purple-500 "
        />
        <p className="mt-3 text-sm text-slate-300">Join the platform early and unlock new ways to connect, earn, and grow.</p>
        <button className="mt-6 rounded-full bg-linear-to-r from-violet-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg">
          Submit
        </button>
      </div>
    </section>
  );
}

