'use client';
import box1 from "../../public/images/box1.png";
import box2 from "../../public/images/box2.png";
import box3 from "../../public/images/box3.png";
import box4 from "../../public/images/box4.png";

export default function Box() {
  return (
    <section className="my-16 mx-4 sm:mx-6 md:mx-auto max-w-6xl relative overflow-hidden rounded-[32px] bg-[#0c1020] px-6 py-16 text-center text-white shadow-2xl md:px-12 md:py-20 lg:py-24">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.06),transparent_70%)] pointer-events-none" />

      <img
        src={box1.src}
        alt="Chat icon"
        className="absolute top-6 left-6 w-14 h-14 sm:w-20 sm:h-20 md:top-10 md:left-12 lg:top-12 lg:left-14 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-xl pointer-events-none select-none transition-transform hover:scale-105 animate-bounce"
      />

      <img
        src={box2.src}
        alt="Money bag icon"
        className="absolute top-6 right-6 w-14 h-14 sm:w-20 sm:h-20 md:top-10 md:right-12 lg:top-12 lg:right-14 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-xl pointer-events-none select-none transition-transform hover:scale-105 animate-pulse"
      />

      <img
        src={box4.src}
        alt="Gift box icon"
        className="absolute bottom-6 left-6 w-14 h-14 sm:w-20 sm:h-20 md:bottom-10 md:left-12 lg:bottom-12 lg:left-14 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-xl pointer-events-none select-none transition-transform hover:scale-105 animate-pulse"
      />

      <img
        src={box3.src}
        alt="Video play icon"
        className="absolute bottom-6 right-6 w-14 h-14 sm:w-20 sm:h-20 md:bottom-10 md:right-12 lg:bottom-12 lg:right-14 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain drop-shadow-xl pointer-events-none select-none transition-transform hover:scale-105 animate-bounce ease-in-out"

      />


      <div className="relative z-10 mx-auto max-w-2xl px-2">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.25] font-heading">
          Ready to Join the
          <br />
          Exclusive{" "}
          <span className="inline-block rounded-xl bg-[#2e1d4e] px-3.5 py-0.5 text-[#818cf8] border border-[#4c2d82]/60">
            Digital Economy?
          </span>
        </h2>

        <p className="mt-4 mb-8 text-sm sm:text-base md:text-lg text-slate-400 font-normal">
          Stay updated! Enter your email to subscribe.
        </p>


        <div className="mx-auto max-w-md sm:max-w-lg bg-white rounded-full p-1.5 pl-6 flex items-center shadow-xl">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 outline-none text-sm sm:text-base pr-3"
          />
          <button className="rounded-full bg-gradient-to-r from-[#c084fc] to-[#6366f1] hover:opacity-70 transition text-white font-medium px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base shrink-0 shadow-md">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}


