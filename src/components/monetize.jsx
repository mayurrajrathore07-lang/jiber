'use client';

import Image from "next/image";
import { motion } from "framer-motion";

import monetize1 from "../../public/images/monetize1.png";
import monetize2 from "../../public/images/monetize2.png";
import monetize3 from "../../public/images/monetize3.png";
import Frame from "../../public/images/Frame.png";

const SECTIONS = [
  {
    id: "creators",
    label: "For Creators",
    title: "Monetize Your Influence.\nOn Your Terms.",
    description:
      "Jiber is built for you. No more 5–30% platform cuts, opaque payment structures, or frustrating fees. Just a simple, transparent way to earn from your community.",
    points: [
      "Subscriptions, tips, gifts, and pay-per-view.",
      "Run sponsored experiences fans fund.",
      "Keep 100% of your earnings.",
    ],
    buttonText: "Join Waitlist as Creator",
    image: monetize1,
    styles: {
      textColor: "text-[#5738ff]",
      borderColor: "border-[#5738ff]",
      hoverColor: "hover:bg-[#5738ff]",
      bgColor: "bg-[#eeeeff]",
    },
  },
  {
    id: "fans",
    label: "For Fans",
    title: "Support What\nYou Love. Instantly.",
    description:
      "With Jiber, you're more than just a follower — you're part of the journey. Support your favorite creators directly, unlock exclusive content, and feel connected in real time.",
    points: [
      "100% of your support reaches your creator.",
      "Unlock content, experiences, and communities.",
      "Just $1 flat fee, instant transfers.",
    ],
    buttonText: "Join Waitlist as Fan",
    image: monetize2,
    styles: {
      textColor: "text-[#d65cff]",
      borderColor: "border-[#d65cff]",
      hoverColor: "hover:bg-[#d65cff]",
      bgColor: "bg-[#fff0ff]",
    },
  },
  {
    id: "everyone",
    label: "For Everyone",
    title: "A Smarter Way\nto Chat + Money.",
    description:
      "Jiber is for anyone who wants simple, secure, borderless payments made easy. Friends, freelancers, or fans — Jiber makes money as easy as messaging.",
    points: [
      "Send money globally without guesswork.",
      "Pay anyone, anywhere, anytime.",
      "Chat, pay, and join exclusive communities.",
    ],
    buttonText: "Join Early Access",
    image: monetize3,
    styles: {
      textColor: "text-[#d65cff]",
      borderColor: "border-[#d65cff]",
      hoverColor: "hover:bg-[#d65cff]",
      bgColor: "bg-[#f2eeff]",
    },
  },
];

export default function Monetize() {
  return (
    <section id="monetization" className="bg-white text-black overflow-hidden">
      {SECTIONS.map((section, index) => {
        const isEven = index % 2 === 0;

        return (
          <div key={section.id} className="py-12 md:py-20">
            <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-14">

              {/* Section Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex aspect-square w-full max-w-[620px] mx-auto items-center justify-center rounded-3xl p-6 ${section.styles.bgColor
                  } ${isEven ? "lg:order-first" : "lg:order-last"}`}
              >
                <Image
                  src={section.image}
                  alt={section.label}
                  className="object-contain p-4"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={index === 0}
                />
              </motion.div>

              {/* Section Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`max-w-xl mx-auto lg:mx-0 p-4 sm:p-6 ${isEven ? "lg:order-last" : "lg:order-first"
                  }`}
              >
                <p className={`mb-3 text-lg font-bold sm:text-xl ${section.styles.textColor}`}>
                  {section.label}
                </p>

                <h2 className="mb-5 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl whitespace-pre-line">
                  {section.title}
                </h2>

                <p className="mb-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                  {section.description}
                </p>

                <ul className="mb-8 space-y-3 text-sm font-medium text-gray-700 sm:text-base">
                  {section.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <Image
                        src={Frame}
                        alt=""
                        aria-hidden="true"
                        width={20}
                        height={20}
                        className="flex-shrink-0"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`rounded-full border-2 px-6 py-3 text-sm font-bold transition-colors duration-200 sm:text-base shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${section.styles.textColor} ${section.styles.borderColor} ${section.styles.hoverColor} hover:text-white`}
                >
                  {section.buttonText}
                </motion.button>
              </motion.div>

            </div>
          </div>
        );
      })}
    </section>
  );
}