import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/hero3.png";

const Card = ({ image, title, text, className = "" }) => (

  <div className={`rounded-3xl p-8 ${className}`}>
    <img src={image.src} alt={title} className="mb-6 w-full rounded-2xl" />
    <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
    <p className="text-sm leading-7 text-gray-600">{text}</p>
  </div>
);

export default function Hero() {
  return (
    <section className="bg-white px-4 py-12 text-black">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">


        <div className="rounded-3xl bg-white p-8">
          <img
            src={hero1}
            alt="Private channel"
            className="mb-8 w-full rounded-2xl"
          />

          <h2 className="mb-4 text-4xl font-semibold">
            Private Channels
            <br />
            Exclusive Access
          </h2>

          <p className="max-w-xl leading-7 text-white/80">
            Monetize your community with private channels and premium content.
            Engage directly with your fans and build a dedicated following.
          </p>
        </div>


        <div className="grid gap-6">
          <Card
            image={hero2.src}
            title="Borderless, Instant, & Just $1"
            text="Send money globally in an instant for a flat $1 fee. No more hidden charges or confusing exchange rates."
            className="bg-white text-black"
          />

          <Card
            image={hero3.src}
            title="You Keep 100% of Your Earnings"
            text="Creators, reclaim your earnings. Jiber never takes a cut, so you keep more from your community."
            className="bg-[#E9F8EF] text-black"
          />
        </div>

      </div>
    </section>
  );
}