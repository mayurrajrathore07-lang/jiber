import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsAndConditions() {
    return (
        <main className="bg-[#f7f7f8] text-black min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow">
                <div className="bg-gradient-to-r from-violet-200 to-pink-200 py-12">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-bold text-black mb-2">Terms &amp; Conditions</h1>
                        <p className="text-slate-700">Effective Date: 13/08/2026</p>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Acceptance of Terms</h2>
                        <p className="text-slate-700 leading-relaxed">
                            By using Jiber&apos;s website or mobile application, you agree to these Terms &amp; Conditions. If you do not agree, please discontinue use of the platform.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">About Jiber</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Jiber is a communications and financial technology platform where messaging meets money. We provide tools enabling users to interact, transfer digital assets, and communicate seamlessly in a secure environment.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Non-Custodial Service</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Jiber provides non-custodial software tools. We do not store, hold, or take custody of your private keys, funds, or digital assets. You retain exclusive ownership and sole responsibility for securing your wallet credentials.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Eligibility</h2>
                        <p className="text-slate-700 leading-relaxed">
                            To use Jiber, you must be at least 18 years old or the legal age of majority in your jurisdiction. By accessing our platform, you represent and warrant that you meet all eligibility requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Fees</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Each transaction on Jiber may include a flat $1 platform fee to cover operational and blockchain network costs.Jiber reserves the right to adjust fees with notice.                        </p>
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
                            Jiber provides software &quot;as is&quot; without warranties of any kind.
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
                            To the maximum extent permitted by law, Jiber Labs Ltd. shall not be liable for any indirect, incidental, or consequential damages resulting from:
                        </p>
                        <ul className="list-disc list-inside text-slate-700 space-y-2 ml-2">
                            <li>Software errors or bugs</li>
                            <li>Blockchain network issues or chain splits</li>
                            <li>User errors (e.g., sending assets to an incorrect address)</li>
                            <li>Third-party service interruptions or cyber attacks</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Termination</h2>
                        <p className="text-slate-700 leading-relaxed">
                            We reserve the right to suspend or terminate access for users found violating these Terms.                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Governing Law</h2>
                        <p className="text-slate-700 leading-relaxed">
                            These Terms are governed by the laws of Seychelles, where Jiber Labs Ltd is incorporated, with operational oversight through Jiber Technologies FZCO (Dubai).</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Contact</h2>
                        <p className="text-slate-700 leading-relaxed">
                            For any questions about these Terms, please contact:
                            <a href="mailto:hello@jiber.app" className="text-purple-600 underline font-medium">
                                hello@jiber.app
                            </a>.
                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}

