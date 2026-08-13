import action1 from "../../public/images/action1.png";
import action2 from "../../public/images/action2.png";
import action3 from "../../public/images/action3.png";
import action4 from "../../public/images/action4.png";

const features = [
  { image: action1, title: "Settle Up\nwith Friends" },
  { image: action2, title: "Support Your Favorite\nCreators" },
  { image: action3, title: "Unlock New Revenue\nStreams" },
  { image: action4, title: "Spend Your Earnings\nAnywhere" },
];

export default function Action() {
  return (
    <section id="money" className="bg-white px-6 py-20 text-[#071b36]">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Jiber in <span className="inline-block rounded-xl bg-violet-500 px-4 py-2 align-middle text-white">Action</span>
        </h1>
        <h2 className="mt-3 text-4xl font-bold md:text-5xl">Simple. Fast. Powerful</h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="text-center">
            <div className="mx-auto flex h-[122px] w-[122px] items-center justify-center rounded-[24px] bg-[#f3f1ff]">
              <img src={feature.image.src} alt={feature.title} className="h-[100px] w-[100px] object-contain" />
            </div>
            <h3 className="mt-6 whitespace-pre-line text-xl font-semibold leading-7 text-[#071b36]">
              {feature.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}