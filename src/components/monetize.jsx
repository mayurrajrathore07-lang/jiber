'use client';
import { motion } from "framer-motion";
import monetize1 from "../../public/images/monetize1.png";
import monetize2 from "../../public/images/monetize2.png";
import monetize3 from "../../public/images/monetize3.png";

const sections = [
  {
    label: "For Creators",
    title: "Monetize Your Influence.\nOn Your Terms.",
    description:
      "Jiber is built for you. No more 5–30% platform cuts, opaque payment structures, or frustrating fees. Just a simple, transparent way to earn from your community.",
    points: [
      "Subscriptions, tips, gifts, and pay-per-view.",
      "Run sponsored experiences — fans fund your tips, adventures, and lifestyle.",
      "Keep 100% of your earnings.",
    ],
    button: "Join Waitlist as Creator",
    image: monetize1,
    textColor: "text-[#5738ff]",
    borderColor: "border-[#5738ff]",
    hoverColor: "hover:bg-[#5738ff]",
    bgColor: "bg-[#eeeeff]",
  },
  {
    label: "For Fans",
    title: "Support What\nYou Love. Instantly.",
    description:
      "With Jiber, you're more than just a follower — you're part of the journey. Support your favorite creators directly, unlock exclusive content, and feel connected in real time.",
    points: [
      "100% of your support reaches your creator.",
      "Unlock content, experiences, and communities.",
      "Just $1 flat fee, instant transfers.",
    ],
    button: "Join Waitlist as Fan",
    image: monetize2,
    textColor: "text-[#d65cff]",
    borderColor: "border-[#d65cff]",
    hoverColor: "hover:bg-[#d65cff]",
    bgColor: "bg-[#fff0ff]",
  },
  {
    label: "For Everyone",
    title: "A Smarter Way\nto Chat + Money.",
    description:
      "Jiber is for anyone who  simple, secure, borderless payments made easy. Friends, freelancers, or fans — Jiber makes money as easy as messaging.",
    points: [
      "Send money globally without guesswork.",
      "Pay anyone, anywhere, anytime.",
      "Chat, pay, and join exclusive communities.",
    ],
    button: "Join Early Access",
    image: monetize3,
    textColor: "text-[#d65cff]",
    borderColor: "border-[#d65cff]",
    hoverColor: "hover:bg-[#d65cff]",
    bgColor: "bg-[#f2eeff]",
  },
];

function Monetize() {
  return (
    <div id="monetization" className="bg-white text-black overflow-hidden ">
      {sections.map((section, index) => {
        const isImageOnLeft = index % 2 === 0;

        return (
          <section key={section.label} className="group py-12 md:py-20 overflow-hidden">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">

              <motion.div
                initial={{ opacity: 0, x: isImageOnLeft ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex aspect-square w-full max-w-[620px] mx-auto items-center justify-center rounded-3xl ${section.bgColor} ${index % 2 !== 0 ? "lg:order-last" : "lg:order-first"
                  }`}
              >
                <img
                  src={section.image.src}
                  alt={section.label}
                  className="h-full w-full rounded-3xl object-contain p-4"
                />
              </motion.div>


              <motion.div
                initial={{ opacity: 0, x: isImageOnLeft ? 80 : -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`max-w-xl mx-auto lg:mx-0 p-6 sm:p-8 rounded-3xl transition-all duration-300 hover:bg-black group-hover:bg-black ${index % 2 !== 0 ? "lg:order-first" : "lg:order-last"
                  }`}
              >
                <p className={`mb-3 text-lg font-bold sm:text-xl ${section.textColor}`}>
                  {section.label}
                </p>

                <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl transition-colors duration-300 text-black group-hover:text-white hover:text-white">
                  {section.title.split("\n").map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h2>

                <p className="mb-6 text-base leading-relaxed text-gray-500 group-hover:text-gray-300 hover:text-gray-300 sm:text-lg transition-colors duration-300">
                  {section.description}
                </p>

                <ul className="mb-8 space-y-3 text-gray-700 group-hover:text-gray-200 hover:text-gray-200 font-medium text-sm sm:text-base transition-colors duration-300">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className={section.textColor}>~</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`rounded-full border-2 px-6 py-3 text-sm sm:text-base font-bold transition ${section.textColor} ${section.borderColor} ${section.hoverColor} hover:text-white shadow-sm`}
                >
                  {section.button}
                </motion.button>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default Monetize;