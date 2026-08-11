import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Action from "@/components/action";
import Monetize from "@/components/monetize";
import GetAccess from "@/components/get";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="bg-[#0a0a0d] text-white">
      <Navbar />
      <Home />
      <Action />
      <Monetize />
      <GetAccess />
      <FAQ />
      <Footer />
    </main>
  );
}
