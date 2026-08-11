import iphone from "../../public/images/iphone.png";

export default function GetAccess() {
  return (
    <section className="bg-[#04070d] px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
        <div className="mx-auto w-full max-w-[400px] rounded-[38px] border border-white/10 bg-[#f3f3f3] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="overflow-hidden rounded-[32px] bg-[#f7f7f7]">
            <div className="flex items-center justify-between px-5 pt-4 text-[11px] font-semibold text-slate-800">
              <span>9:41</span>
              <div className="flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-800 opacity-40"></span>
                </span>
                <div className="flex items-end gap-0.5">
                  <span className="block h-2 w-1 rounded-sm bg-slate-800"></span>
                  <span className="block h-3 w-1 rounded-sm bg-slate-800"></span>
                  <span className="block h-4 w-1 rounded-sm bg-slate-800"></span>
                </div>
              </div>
            </div>

            <div className="px-4 pb-4 pt-2">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  Beta Creator
                </h2>
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {[
                  "All",
                  "Crypto",
                  "Trading",
                  "Creators",
                  "Tech",
                ].map((label, index) => (
                  <span
                    key={label}
                    className={[
                      "rounded-full border px-3 py-1 text-[11px] font-medium",
                      index === 0
                        ? "border-violet-200 bg-violet-100 text-violet-700"
                        : "border-slate-200 bg-white text-slate-600",
                    ].join(" ")}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="rounded-[28px] bg-white p-2 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                <div className="flex items-center justify-between rounded-[22px] bg-white p-2">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-orange-300 via-pink-200 to-violet-300" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">Nature Places</p>
                      <p className="text-[11px] text-slate-500">@lovingchocolate</p>
                    </div>
                  </div>
                  <button className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold text-slate-700">
                    Joined
                  </button>
                </div>

                <div className="mt-3 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-100">
                  <img
                    src={iphone.src}
                    alt="Jiber app preview"
                    className="h-[290px] w-full object-cover"
                  />
                </div>

                <div className="mt-4 flex items-center justify-between px-1">
                  <div className="flex items-center gap-4 text-slate-600">
                    <span className="text-lg">♡</span>
                    <span className="text-lg">💬</span>
                    <span className="text-lg">↗</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">2.5M Views</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[650px]">
          <p className="inline-flex rounded-full bg-[#dff7ef] px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.22em] text-[#0d8d68]">
            Beta creator
          </p>

          <h3 className="mt-5 text-5xl font-black leading-[0.9] tracking-[-0.06em] text-slate-100 sm:text-6xl lg:text-[5.2rem]">
            <span className="inline-block rounded-2xl bg-[#dff7ef] px-3 py-1 text-[#101828]">
              Get Early
            </span>
            <span className="ml-1 inline-block text-[#b9d4f2]">Access</span>
            <span className="mt-2 block text-[#d9e8ff]">& Influence</span>
          </h3>

          <p className="mt-8 max-w-[620px] text-lg leading-8 text-slate-300">
            Join us in shaping the future of content monetization! As a beta tester,
            you&apos;ll gain early access to our platform and features. Your feedback is
            crucial in crafting a top-notch tool for creators like you.
          </p>

          <button className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-indigo-500 px-8 py-4 text-xl font-bold text-white shadow-[0_18px_45px_rgba(127,86,240,0.5)] transition-transform hover:scale-[1.02]">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
}