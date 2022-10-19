import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Dots } from "~/components/Layout/BackgroundEffect";
import { NavBar } from "~/components/Layout/Navbar";

export default function Index() {
  return (
    <div className="min-h-screen relative bg-white">
      <Dots />
      <NavBar />

      <div className="pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <h1>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900">
                    Data to enrich your
                  </span>
                  <span className="block text-transparent bg-gradient-to-r from-primary bg-clip-text to-white">
                    online business
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua ad ad non deserunt sunt.
              </p>
              <p className="mt-3">
                <button className="btn btn-primary text-white w-full">
                  book now
                </button>
              </p>
            </div>
            <div className="relative mt-12 sm:mx-auto sm:max-w-xl lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
              <svg
                className="absolute top-0 left-1/2 origin-top -translate-x-1/2 -translate-y-8 scale-75 transform sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-lg">
                <a
                  href="https://youtu.be/N3m2-sUG9e4"
                  className="relative block w-full overflow-hidden rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Watch our video to learn more</span>
                  <img
                    className="w-full"
                    src="/images/citybubbles-image1.jpg"
                    alt=""
                  />
                  <span
                    className="absolute inset-0 flex h-full w-full items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-20 w-20 text-indigo-500"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle
                        opacity="0.9"
                        cx={42}
                        cy={42}
                        r={42}
                        fill="white"
                      />
                      <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="absolute bottom-8 w-full flex items-center justify-center">
        <button>
          <ChevronDownIcon className="flex-1 text-primary h-8 w-8 animate-bounce" />
        </button>
      </div>
    </div>
  );
}

// <footer className="flex opacity-90 gap-8">
//   <div className="flex-1">
//     <span className="font-normal text-lg text-neutral-900">We are co-financed by</span>
//     <MainSponsor fill="black" className="fill-black w-full" />
//   </div>

//   <div className="flex-1">
//     <span className="capitalize font-normal text-base text-neutral-900">Find us on social medias</span>
//     <SocialNetworks />
//   </div>
// </footer>
