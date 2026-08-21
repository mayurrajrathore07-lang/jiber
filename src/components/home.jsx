'use client';

import homeImg from "../../public/images/home.png";
import RotatingText from "./animation/RotatingText";
import BlurText from "./animation/BlurText";
import { FaCircleExclamation, FaBolt, FaDollarSign } from "react-icons/fa6";


export default function Home() {
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <section className="bg-white px-4 py-12 text-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

        <div className="w-full">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">

            <span className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="text-gray-900 text-5xl">Chat +</span>

              <RotatingText
                texts={[
                  "Send Money",
                  "Messaging",
                  "Revenue",
                  "Spending",
                ]}
                mainClassName="px-3.5 py-1 bg-[#a855f7] text-white rounded-xl overflow-hidden justify-center items-center inline-flex"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden py-0.5"
                transition={{
                  type: "spring",
                  damping: 30,
                  stiffness: 400,
                }}
                rotationInterval={2000}
                splitBy="characters"
                auto
                loop
              />
            </span>
          </h1>

          <div className="mt-4 mb-8 space-y-1 font-heading">
            <BlurText
              text="Worldwide for $1. Keep"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-5xl sm:text-5xl font-bold text-gray-900"
            />
            <BlurText
              text="100% of What You Earn!"
              delay={150}
              animateBy="words"
              direction="top"
              onAnimationComplete={handleAnimationComplete}
              className="text-5xl sm:text-5xl font-extrabold text-purple-600"
            />
          </div>

          <ul className="mt-6 space-y-3 text-base text-gray-700 sm:text-lg font-plus-jakarta ">
            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-600">•</span>
              <span>
                Send USDC worldwide with a $1 flat fee — built on Solana.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-600">•</span>
              <span>
                Your conversations now move money instantly and securely.
              </span>
            </li>

            <li className="flex items-start gap-2">
              <span className="font-bold text-purple-600">•</span>
              <span>
                Exclusive digital economy for creators & fans. Built on Solana
                + USDC.
              </span>
            </li>
          </ul>

          <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-6 text-gray-900 shadow-xl sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold font-bricolage">
                Join the waitlist
              </h2>
              <h2 className="text-xl font-medium font-heading flex items-center gap-2"><FaCircleExclamation />We don’t spam</h2>
            </div>

            <div className="mt-5 space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-full border border-pink-400 px-5 py-3.5 outline-none transition focus:border-purple-500"
              />

              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-full border border-pink-400 px-5 py-3.5 outline-none transition focus:border-purple-500"
              />
            </div>

            <button className="mt-5 w-full rounded-full bg-linear-to-r from-purple-400 to-blue-600 py-3.5 text-lg font-semibold text-white shadow-md transition hover:opacity-70 cursor:pointer">
              Join Waitlist
            </button>

            <p className="mt-3.5 text-center text-sm font-semibold text-black flex items-center justify-center gap-1.5 font-heading">
              <FaDollarSign className="text-black text-xs" /> Free Instant Transfer
            </p>
          </div>
        </div>

        <div className="flex w-full justify-center">
          <img
            src={homeImg.src}
            alt="Home preview"
            className="h-auto w-full max-w-md rounded-2xl object-contain drop-shadow-md lg:max-w-xl"
          />
        </div>

      </div>
    </section>
  );
}