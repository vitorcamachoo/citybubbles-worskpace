import { Suspense } from "react";
import { useLoaderData } from "@remix-run/react";
import { InlineWidget } from "react-calendly";

type LoaderData = {
  url: string;
};

export const loader = () => {
  return { url: process.env.CALENDLY_URL! };
};

export default function Book() {
  const { url } = useLoaderData() as LoaderData;
  if (typeof window === "undefined") return null;

  return (
    <Suspense fallback={null}>
      <div className="w-full h-screen">
        <InlineWidget
          pageSettings={{
            hideGdprBanner: true,
            hideLandingPageDetails: true,
          }}
          styles={{ height: "100vh" }}
          url={url!}
        />
      </div>
    </Suspense>
  );
}
