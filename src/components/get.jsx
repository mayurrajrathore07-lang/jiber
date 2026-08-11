import iphone from "../../public/images/iphone.png";

export default function GetAccess() {
  return (
    <section className="mx-auto mb-20 max-w-6xl rounded-[28px] bg-white p-6 text-[#07172b] shadow-sm md:grid-cols-2 md:p-10 lg:grid">
      <div className="flex justify-center">
        <div className="flex h-[369px] w-[314px] items-center justify-center overflow-hidden rounded-t-[51px] border-[4px] border-slate-200 bg-slate-100">
          <img src={iphone.src} alt="Jiber app preview" className="h-full w-full object-cover" />
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center lg:mt-0">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">Beta creator</p>
        <h3 className="text-3xl font-black text-slate-900 md:text-4xl">Get early access & influence</h3>
        <p className="mt-4 text-slate-600">
          Join the platform early and help shape the future of community-powered digital transactions.
        </p>
        <button className="mt-6 w-fit rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white">
          Join early access
        </button>
      </div>
    </section>
  );
}
