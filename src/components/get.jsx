import iphone from "../../public/images/iphone.png";

export default function GetAccess() {
  return (
    <section className="bg-white px-4 py-12 sm:px-6 lg:py-16 text-black">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
        <div className="flex justify-center">
          <img
            src={iphone.src}
            alt="Jiber app preview"
            className="max-h-[480px] sm:max-h-[550px] w-auto max-w-full rounded-2xl object-contain shadow-xl"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="inline-block rounded-full bg-[#dff7ef] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8d68]">
            Beta Creator
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Get Early Access
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              & Influence
            </span>
          </h2>
          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-base leading-relaxed text-gray-600 sm:text-lg">
            Join Jiber today to test early creator monetization features, claim your handle, and start moving money with zero platform cut.
          </p>

          <button className="mt-6 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-7 py-3 font-bold text-white shadow-md hover:opacity-95 transition">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
}