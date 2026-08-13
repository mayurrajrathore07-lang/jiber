import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
  return (
    <main className="bg-[#f7f7f8] text-black min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">


        <div className="bg-gradient-to-r from-violet-200 to-pink-200 py-12">
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-4xl font-bold text-black mb-2">Terms & Conditions</h1>
            <p className="text-slate-700">Effective Date: 13/08/2026</p>
          </div>
        </div>


        <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Acceptance of Terms</h2>
            <p className="text-slate-700 leading-relaxed">lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">About Jiber</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Non-Custodial Service</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Eligibility</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Fees</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Prohibited Use</h2>
            <p className="text-slate-700 leading-relaxed mb-4">You agree not to use Jiber for:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
              <li>Money laundering or illegal transactions</li>
              <li>Fraudulent, exploitative, or malicious behavior</li>
              <li>Activities violating local, international, or financial regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Disclaimer</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Jiber provides software "as is" without warranties of any kind.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              We do not guarantee transaction speed, security, or network uptime.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Users assume full responsibility for wallet management and private key safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Limitation of Liability</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              lorem            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
              <li>Software errors or bugs</li>
              <li>Blockchain network issues</li>
              <li>User errors (e.g., wrong wallet address)</li>
              <li>Third-party service interruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Termination</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Governing Law</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
            <p className="text-slate-700 leading-relaxed">
              lorem            </p>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
