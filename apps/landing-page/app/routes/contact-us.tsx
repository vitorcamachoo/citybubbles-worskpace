import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { SocialNetworks } from "~/components/SocialNetworks";

const offices = [
  {
    id: 1,
    city: "Los Angeles",
    address: ["4556 Brendan Ferry", "Los Angeles, CA 90210"],
  },
  {
    id: 2,
    city: "New York",
    address: ["886 Walter Streets", "New York, NY 12345"],
  },
  {
    id: 3,
    city: "Toronto",
    address: ["7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
  },
  { id: 4, city: "London", address: ["114 Cobble Lane", "London N1 2EF"] },
];

export default function ContactUs() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-50">
        <div className="pb-14">
          <div className="relative z-10 mx-auto max-w-7xl pl-4 pr-8 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-500">
              Vel nunc non ut montes, viverra tempor. Proin lectus nibh
              phasellus morbi non morbi. In elementum urna ut volutpat. Sagittis
              et vel et fermentum amet consequat.
            </p>
          </div>
        </div>
      </div>

      {/* Contact section */}
      <section className="relative bg-white" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 id="contact-heading" className="sr-only">
              Contact us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden bg-gradient-to-b from-lime-500 to-lime-600 py-10 px-6 sm:px-10 xl:p-12">
                <h3 className="text-lg font-medium text-white">
                  Contact information
                </h3>
                <p className="mt-6 max-w-3xl text-base text-lime-50">
                  Nullam risus blandit ac aliquam justo ipsum. Quam mauris
                  volutpat massa dictumst amet. Sapien tortor lacus arcu.
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">Phone number</span>
                  </dt>
                  <dd className="flex text-base text-lime-50">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-lime-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                  <dt>
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd className="flex text-base text-lime-50">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-lime-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">info@citybubbles.pt</span>
                  </dd>
                </dl>
                <div className="text-white mt-8 flex space-x-12">
                  <SocialNetworks />
                </div>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">
                  Send us a message
                </h3>
                <form
                  action="#"
                  method="POST"
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Phone
                      </label>
                      <span
                        id="phone-optional"
                        className="text-sm text-gray-500"
                      >
                        Optional
                      </span>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                        aria-describedby="phone-optional"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Subject
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Message
                      </label>
                      <span id="message-max" className="text-sm text-gray-500">
                        Max. 500 characters
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 shadow-sm focus:border-lime-500 focus:ring-lime-500"
                        aria-describedby="message-max"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-lime-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:w-auto"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact grid */}
      <section aria-labelledby="offices-heading">
        <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h2
            id="offices-heading"
            className="text-3xl font-bold tracking-tight text-gray-900"
          >
            Our offices
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-gray-500">
            Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate
            id malesuada non. Cras aliquet purus dui laoreet diam sed lacus,
            fames.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div key={office.id}>
                <h3 className="text-lg font-medium text-gray-900">
                  {office.city}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
