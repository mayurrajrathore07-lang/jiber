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
    <section id="money" className="bg-white px-6 py-20 text-[#071b36]">
      <div className="mx-auto max-w-6xl text-center">
        <h1 className="text-4xl font-bold md:text-5xl">
          Jiber in{" "}
          <span className="rounded-xl bg-violet-500 px-4 py-2 text-white">
            Action
          </span>
        </h1>

        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Simple. Fast. Powerful
        </h2>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
        {features.map((item, index) => (
          <div key={index} className="text-center">
            <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-3xl bg-[#f3f1ff]">
              <img
                src={item.image.src}
                alt={item.title}
                className="h-24 w-24 object-contain"
              />
            </div>

            <h3 className="mt-6 whitespace-pre-line text-xl font-semibold leading-7">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Action;