import iphone from "../../public/images/iphone.png";

export default function GetAccess() {
  return (
    <section className="bg-white px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        
        <div className="flex justify-center">
          <img
            src={iphone.src}
            alt="Jiber app preview"
            className="h-'500px' w-'350px' rounded-[30px] object-cover"
          />
        </div>

  
        <div>
          <p className="inline-block rounded-full bg-[#dff7ef] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8d68]">
            Beta Creator
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            <span className="text-[#b9d4f2]">Get Early </span>
            <span className="rounded-xl bg-[#dff7ef] px-2 text-[#101828]">
              Access
            </span>
            <br />
            <span className="text-[#d9e8ff]">& Influence</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-7 text-slate-300">
            Join us in shaping the future of content monetization! As a beta
            tester, you&apos;ll gain early access to our platform and features.
            Your feedback is crucial in crafting a top-notch tool for creators
            like you.
          </p>

          <button className="mt-6 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-7 py-3 font-bold text-white">
            Join Early Access
          </button>
        </div>

      </div>
    </section>
  );
}