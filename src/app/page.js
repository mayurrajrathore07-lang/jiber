import Navbar from "@/components/navbar";
import Home from "@/components/home";
import Action from "@/components/action";
import Monetize from "@/components/monetize";
import GetAccess from "@/components/get";
import FAQ from "@/components/faq";
import Box from "@/components/faq";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="bg-[#f7f7f8] text-black">
      <Navbar />
      <Home />
      <Action />
      <Monetize />
      <GetAccess />
      <FAQ />
      <Box/>
      <Footer />
    </main>
  );
}
