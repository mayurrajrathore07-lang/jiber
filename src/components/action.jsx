import action1 from "../../public/images/action1.png";
import action2 from "../../public/images/action2.png";
import action3 from "../../public/images/action3.png";
import action4 from "../../public/images/action4.png";

const features = [
  {
    image: action1,
    title: "Settle Up\nwith Friends",
  },
  {
    image: action2,
    title: "Support Your Favorite\nCreators",
  },
  {
    image: action3,
    title: "Unlock New Revenue\nStreams",
  },
  {
    image: action4,
    title: "Spend Your Earnings\nAnywhere",
  },
];

function Action() {
  return (
    <section id="money" className="bg-white px-4 py-12 sm:px-6 md:py-20 text-[#071b36]">

      <div className="mx-auto max-w-6xl text-center">

        <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Jiber in{" "}

          <span className="inline-block rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-4 py-2 text-white">
            Action
          </span>

        </h1>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl md:text-5xl">
          Simple. Fast. Powerful
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">

        {features.map((item, index) => (

          <div key={index} className="flex flex-col items-center text-center p-4 rounded-2xl transition hover:bg-gray-50/50">

            <div className="flex h-28 w-28 sm:h-32 sm:w-32 items-center justify-center rounded-3xl bg-[#f3f1ff]">

              <img
                src={item.image.src}
                alt={item.title}
                className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
              />
            </div>

            <h3 className="mt-5 whitespace-pre-line text-lg font-semibold leading-snug sm:text-xl">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Action;