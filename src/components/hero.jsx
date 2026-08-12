import hero1 from "../../public/images/hero1.png";
import hero2 from "../../public/images/hero2.png";
import hero3 from "../../public/images/hero3.png";


export default function Hero(){

    return(
            <section className="bg-white px-4 py-12 text-black md:px-8 flex">
       <div>  

      <div className="h-120 w-120">
        <img src="/images/hero1.png" alt="Home preview" className="h-auto w-full" />
      </div>

      <div className="bg-white">
        <h2 >Private Channels <br />
Exclusive Access</h2>

      </div>

    </div>






        </section>


    );


}