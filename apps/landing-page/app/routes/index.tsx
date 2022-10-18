import { BackgroundEffect } from "~/components/Layout/BackgroundEffect";
import { SecondarySponsor } from "~/components/Sponsors";


export default function Index() {
  return (
    <div>
      <div className="flex w-full gap-4">
        {/* Left section */}
        <section className=" relative flex flex-1 flex-col justify-center text-left gap-8">
          <BackgroundEffect />
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold capitalize text-[#1B1C57]">
              find the place to try a new adventure
            </h1>
            <p className="text-base font-normal text-neutral-1 opacity-75">
              Everything you need about the citybubbles experience be here, where
              it will be easier for you
            </p>
          </div>
          <section className="text-center">
            <button className="btn btn-primary animate-pulse uppercase">book now</button>
          </section>
          <section>
            <span className="capitalize font-normal text-base text-neutral-500">our partnership</span>
            <SecondarySponsor />
          </section>
        </section>

        {/* Right section */}
        <section
          className="flex-1 "
        >
          <HeroImage />
          </section>
      </div>
    </div>
  );
}

function HeroImage() {
  return (
    <>
      <div 
          className="h-[450px] rounded-bl-[80px]"
            style={{
              backgroundImage: `url('/images/citybubbles-main.jpg')`,
              backgroundSize: "cover",
            }}
          
          />
    </>
  );
}
