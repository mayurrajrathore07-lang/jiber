import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/hero3.png";


export default function Hero() {

  return (
    <section className="bg-white px-4 py-12 text-black md:px-8 flex">
      <div>

        <div className="h-120 w-120">
          <img src="/images/hero1.png" alt="Home preview" className="h-auto w-full" />
        </div>

        <div className="bg-white">
          <h2 className="w-258 h-76 font-BricolageGrotesque font-600 text-32 leading-120 text-black">Private Channels <br />
            Exclusive Access</h2>
          <p className="w-389 h-14 font-PlusJakartaSans font-400 text-20 leading-140 text-black">Monetize your community with private channels and premium content. Engage directly with your fans and build a dedicated following.</p>
        </div>

      </div>

      <div className="bg-black">

        <div className="h-120 w-120" ><img src="/images/hero2.png" alt="" />
          <h2>Borderless, Instant, & Just $1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laudantium. Sit hic perferendis aliquam animi esse, beatae cum sed, ipsam expedita laborum adipisci nobis! Reprehenderit consectetur ducimus itaque obcaecati nobis?</p>

        </div>


        <div className="h-120 w-120" ><img src="/images/hero3.png" alt="" />
          <h2>Borderless, Instant, & Just $1</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laudantium. Sit hic perferendis aliquam animi esse, beatae cum sed, ipsam expedita laborum adipisci nobis! Reprehenderit consectetur ducimus itaque obcaecati nobis?</p>

        </div>


      </div>

    </section>


  );


}