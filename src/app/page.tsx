import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Statement from "@/components/Statement";
import BleedingCash from "@/components/BleedingCash";
import PipelineFlow from "@/components/PipelineFlow";
import FooterRouting from "@/components/FooterRouting";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-cyan/30 flex flex-col items-center">
      <Navbar />
      <div className="w-full flex flex-col items-center">
        <Hero />
        <Statement />
        <BleedingCash />
        <PipelineFlow />
        <FooterRouting />
      </div>
    </main>
  );
}
