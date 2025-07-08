import Header from "@/components/Homepage/Header";
import OurMission from "@/components/OurMission/OurMission";
import Footer from "@/components/Homepage/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Mission - 1upX",
  description:
    "Discover why we're building the future of AI. At 1upX, we believe AI shouldn't replace humans—it should empower them to reach their full potential.",
};

export default function OurMissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <OurMission />
      <Footer />
    </div>
  );
}
