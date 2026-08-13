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
    <main id="monetization" className="bg-white text-black">
      {sections.map((section, index) => (
        <section key={section.label} className="py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">


            {index % 2 === 0 && (
              <div
                className={`flex aspect-square w-full max-w-[620px] items-center justify-center rounded-3xl ${section.bgColor}`}
              >
                <img
                  src={section.image.src}
                  alt={section.label}
                  className="h-full w-full rounded-3xl object-contain"
                />
              </div>
            )}


            <div className="max-w-xl">
              <p className={`mb-3 text-xl font-bold ${section.textColor}`}>
                {section.label}
              </p>

              <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">
                {section.title.split("\n").map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </h2>

              <p className="mb-7 text-lg leading-relaxed text-gray-400">
                {section.description}
              </p>

              <ul className="mb-8 space-y-4 text-black-500">
                {section.points.map((point) => (
                  <li key={point}>~ {point}</li>
                ))}
              </ul>

              <button
                className={`rounded-full border-2 px-7 py-3 font-bold transition ${section.textColor} ${section.borderColor} ${section.hoverColor} hover:text-white`}
              >
                {section.button}
              </button>
            </div>

            {index % 2 !== 0 && (
              <div
                className={`flex aspect-square w-full max-w-[620px] items-center justify-center rounded-3xl ${section.bgColor}`}
              >
                <img
                  src={section.image.src}
                  alt={section.label}
                  className="h-full w-full rounded-3xl object-contain"
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Monetize;