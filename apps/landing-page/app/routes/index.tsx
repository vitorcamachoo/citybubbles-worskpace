import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { FooterSection } from "~/components/FooterSection";
import { HeroSection } from "~/components/HeroSection";
import { NavBar } from "~/components/Layout/Navbar";
import { Newsletter } from "~/components/Newsletter";

export default function Index() {
  return (
    <>
      <div className="min-h-screen relative bg-white">
        <NavBar />
        <HeroSection />
        <div className="absolute bottom-8 w-full flex items-center justify-center">
          <button>
            <ChevronDownIcon className="flex-1 text-primary h-8 w-8 animate-bounce" />
          </button>
        </div>
      </div>
      <Newsletter />
      <FooterSection />
    </>
  );
}
