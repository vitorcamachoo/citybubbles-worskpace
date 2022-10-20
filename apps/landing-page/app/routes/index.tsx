import { Features } from "~/components/Features";
import { HeroSection } from "~/components/HeroSection";
import { Newsletter } from "~/components/Newsletter";
import { Routes } from "~/components/Routes";

export default function Index() {
  return (
    <div className="flex flex-col gap-36 min-h-screen relative bg-white">
      <HeroSection />
      <Features />
      <Routes />
      <Newsletter />
    </div>
  );
}
