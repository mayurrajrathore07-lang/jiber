import monetize1 from "../../public/images/monetize1.png";
import monetize2 from "../../public/images/monetize2.png";
import monetize3 from "../../public/images/monetize3.png";

const sections = [
  {
    label: "For Creators",
    title: "Monetize Your Influence.\nOn Your Terms.",
    description:
      "Jiber is built for you. No more 5–30% platform cuts, opaque payment structures, or frustrating fees. Just a simple, transparent way to earn from your community.",
    points: ["Subscriptions, tips, gifts, and pay-per-view.", "Run sponsored experiences — fans fund your tips, adventures, and lifestyle.", "Keep 100% of your earnings."],
    button: "Join Waitlist as Creator",
    image: monetize1,
    tone: "text-[#5738ff] border-[#5738ff] hover:bg-[#5738ff]",
    cardClass: "bg-[#eeeeff]",
  },
  {
    label: "For Fans",
    title: "Support What\nYou Love. Instantly.",
    description:
      "With Jiber, you're more than just a follower — you're part of the journey. Support your favorite creators directly, unlock exclusive content, and feel connected in real time.",
    points: ["100% of your support reaches your creator.", "Unlock content, experiences, and communities.", "Just $1 flat fee, instant transfers."],
    button: "Join Waitlist as Fan",
    image: monetize2,
    tone: "text-[#d65cff] border-[#d65cff] hover:bg-[#d65cff]",
    cardClass: "bg-[#fff0ff]",
  },
  {
    label: "For Everyone",
    title: "A Smarter Way\nto Chat + Money.",
    description:
      "Jiber is for anyone who wants simple, secure, borderless payments made easy. Friends, freelancers, or fans — Jiber makes money as easy as messaging.",
    points: ["Send money globally without guesswork.", "Pay anyone, anywhere, anytime.", "Chat, pay, and join exclusive communities."],
    button: "Join Early Access",
    image: monetize3,
    tone: "text-[#d65cff] border-[#d65cff] hover:bg-[#d65cff]",
    cardClass: "bg-[#f2eeff]",
  },
];

export default function Monetize() {
  return (
    <main id="monetization" className="bg-white text-black">
      {sections.map((section, index) => (
        <section key={section.label} className="flex items-center py-20">
          <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
            {index % 2 === 0 ? (
              <div className={`flex aspect-square w-full max-w-[620px] items-center justify-center rounded-[30px] ${section.cardClass}`}>
                <img src={section.image.src} alt={section.label} className="h-full w-full rounded-[30px] object-contain" />
              </div>
            ) : null}

            <div className="max-w-[560px]">
              <p className={`mb-3 text-xl font-bold ${section.tone.split(" ")[0]}`}>{section.label}</p>
              <h2 className="mb-5 text-4xl font-bold leading-tight md:text-5xl">{section.title.split("\n").map((line) => <span key={line} className="block">{line}</span>)}</h2>
              <p className="mb-7 text-lg leading-relaxed text-gray-400">{section.description}</p>
              <ul className="mb-8 space-y-4 text-gray-300">
                {section.points.map((point) => (
                  <li key={point}>✦ {point}</li>
                ))}
              </ul>
              <button className={`rounded-full border-2 px-7 py-3 font-bold transition ${section.tone}`}>
                {section.button}
              </button>
            </div>

            {index % 2 !== 0 ? (
              <div className={`flex aspect-square w-full max-w-[620px] items-center justify-center rounded-[30px] ${section.cardClass}`}>
                <img src={section.image.src} alt={section.label} className="h-full w-full rounded-[30px] object-contain" />
              </div>
            ) : null}
          </div>
        </section>
      ))}
    </main>
  );
}