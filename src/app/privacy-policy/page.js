import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
    return (
        <main className="bg-[#f7f7f8] text-black min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow">
                <div className="bg-gradient-to-r from-violet-200 to-pink-200 py-12">
                    <div className="mx-auto max-w-4xl px-6">
                        <h1 className="text-4xl font-bold text-black mb-2">Privacy Policy</h1>
                        <p className="text-slate-700">Effective Date: 13/08/2026</p>
                    </div>
                </div>

                <div className="mx-auto max-w-4xl px-6 py-12 space-y-8">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Introduction</h2>
                        <p className="text-slate-700 leading-relaxed">
                            lorem                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">Information We Collect</h2>
                        <p className="text-slate-700 leading-relaxed">
                            lorem                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold mb-4 text-black">How We Use Your Information</h2>
                        <p className="text-slate-700 leading-relaxed">
                            lorem                        </p>
                    </section>
                </div>
            </div>

            <Footer />
        </main>
    );
}
