import iphone from "../../public/images/iphone.png";

export default function GetAccess() {
  return (
    <section className="bg-white px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">


        <div className="flex justify-center">
          <img
            src={iphone.src}
            alt="Jiber app preview"
            className="h-'600px' w-'350px' rounded-[15px] object-cover"
          />
        </div>


        <div>
          <p className="inline-block rounded-full bg-[#dff7ef] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0d8d68]">
            Beta Creator
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
            <span className="text-[#030303]">Get Early Access</span>
            <br />
            <span className="text-[#030303]">& Influence</span>
          </h2>

          <p className=" text-black mt-6 max-w-xl text-lg leading-7 text-black-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sequi totam impedit repudiandae voluptate odit non, in fugit
            ipsa dignissimos maxime provident tenetur unde consectetur
            ducimus dolorem rerum aspernatur cumque!
          </p>

          <button className="mt-6 rounded-full bg-linear-to-r from-violet-500 to-indigo-500 px-7 py-3 font-bold text-white">
            Join Early Access
          </button>
        </div>

      </div>
    </section>
  );
}