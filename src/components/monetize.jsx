import monetize1 from '../../public/images/monetize1.png';
import monetize2 from '../../public/images/monetize2.png';
import monetize3 from '../../public/images/monetize3.png';



export default function Home() {
  return (
    <main className="bg-black text-white">

    
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="w-full max-w-[620px] aspect-square rounded-[30px] bg-[#eeeeff] flex items-center justify-center">
            <img
              src="monetize1.png"
              alt="image"
              className="w-full h-full object-contain rounded-[30px]"
            />
          </div>

          <div className="max-w-[560px]">
            <p className="text-[#5738ff] font-bold text-xl mb-3">
              For Creators
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Monetize Your Influence.
              <br />
              On Your Terms.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-7">
              Jiber is built for you. No more 5–30% platform cuts,
              opaque payment structures, or frustrating fees. Just a
              simple, transparent way to earn from your community.
            </p>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li>✦ Subscriptions, tips, gifts, and pay-per-view.</li>
              <li>✦ Run sponsored experiences — fans fund your tips, adventures, and lifestyle.</li>
              <li>✦ Keep 100% of your earnings.</li>
            </ul>

            <button className="border-2 border-[#5738ff] rounded-full px-7 py-3 text-[#5738ff] font-bold hover:bg-[#5738ff] hover:text-white transition">
              Join Waitlist as Creator
            </button>
          </div>

        </div>
      </section>


      
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-[560px] lg:order-1">
            <p className="text-[#d65cff] font-bold text-xl mb-3">
              For Fans
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Support What
              <br />
              You Love. Instantly.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-7">
              With Jiber, you're more than just a follower — you're
              part of the journey. Support your favorite creators
              directly, unlock exclusive content, and feel connected
              in real time.
            </p>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li>✦ 100% of your support reaches your creator.</li>
              <li>✦ Unlock content, experiences, and communities.</li>
              <li>✦ Just $1 flat fee, instant transfers.</li>
            </ul>

            <button className="border-2 border-[#d65cff] rounded-full px-7 py-3 text-[#d65cff] font-bold hover:bg-[#d65cff] hover:text-white transition">
              Join Waitlist as Fan
            </button>
          </div>

          <div className="w-full max-w-[620px] aspect-square rounded-[30px] bg-[#fff0ff] flex items-center justify-center lg:order-2">
            <img
              src="monetize2.png"
              alt="image"
              className="w-full h-full object-contain rounded-[30px]"
            />
          </div>

        </div>
      </section>


      
      <section className="min-h-screen flex items-center py-20">
        <div className="container mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="w-full max-w-[620px] aspect-square rounded-[30px] overflow-hidden">
            <img
              src="monetize3.png"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-[560px]">
            <p className="text-[#d65cff] font-bold text-xl mb-3">
              For Everyone
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              A Smarter Way
              <br />
              to Chat + Money.
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-7">
              Jiber is for anyone who wants simple, secure,
              borderless payments made easyday conversations.
              Friends, freelancers, or fans — Jiber makes money
              as easy as messaging.
            </p>

            <ul className="space-y-4 text-gray-300 mb-8">
              <li>✦ Send money globally without guesswork.</li>
              <li>✦ Pay anyone, anywhere, anytime.</li>
              <li>✦ Chat, pay, and join exclusive communities.</li>
            </ul>

            <button className="border-2 border-[#d65cff] rounded-full px-7 py-3 text-[#d65cff] font-bold hover:bg-[#d65cff] hover:text-white transition">
              Join Early Access
            </button>
          </div>

        </div>
      </section>

    </main>
  );
}