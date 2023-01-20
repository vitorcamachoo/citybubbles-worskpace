import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Features } from "~/components/Features";
import { HeroSection } from "~/components/HeroSection";
import { Newsletter } from "~/components/Newsletter";
import { Routes } from "~/components/Routes";
import { features, routes } from "~/sdk/mock";

export async function loader() {
  return json({ features, routes });
}

export default function Landing() {
  const { features, routes } = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-36 min-h-screen relative bg-white px-8">
      <HeroSection />
      <Features features={features} />

      <Routes routes={routes} />
      <Newsletter />
    </div>
  );
}
