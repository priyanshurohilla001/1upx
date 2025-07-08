import Header from "@/components/Homepage/Header";
import PrivacyOwnership from "@/components/Privacy/PrivacyOwnership";
import Footer from "@/components/Homepage/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Ownership - 1upX",
  description:
    "Your creativity, your art is yours. 100% privacy, your IP, your control. Learn about our non-negotiable privacy guarantees and data ownership policies.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PrivacyOwnership />
      <Footer />
    </div>
  );
}
