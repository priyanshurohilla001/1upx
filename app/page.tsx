import Header from "@/components/Homepage/Header";
import Hero from "@/components/Homepage/Hero";
import WhoShouldJoin from "@/components/Homepage/WhoShouldJoin";
import HowWeDo from "@/components/Homepage/HowWeDo";
import Benefits from "@/components/Homepage/Benefits";
import Footer from "@/components/Homepage/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <WhoShouldJoin />
      <HowWeDo />
      <Benefits />
      <Footer />
    </div>
  );
}
