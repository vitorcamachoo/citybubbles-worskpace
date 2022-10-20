export const HeroSection = () => {
  return (
    <div className="pt-6 pb-16 sm:pb-24 lg:pb-32">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:mt-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
            <h1>
              <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                <span className="block text-gray-900">Data to enrich your</span>
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
                    <circle opacity="0.9" cx={42} cy={42} r={42} fill="white" />
                    <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
