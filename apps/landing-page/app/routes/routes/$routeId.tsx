import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";
import invariant from "tiny-invariant";
import { Routes } from "~/components/Routes";
import { routes } from "~/sdk/mock/routes";

export async function loader({ params }: LoaderArgs) {
  invariant(params.routeId, "Expected params.routeId");

  const route = routes.find(({ id }) => id === params.routeId);
  if (!route) throw new Response("Not Found", { status: 404 });

  return json({ routes, route });
}

export default function () {
  const { routes, route } = useLoaderData<typeof loader>();
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="relative lg:max-w-7xl mx-auto p-4 flex flex-col gap-10">
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="mx-auto px-4 sm:px-6 lg:mx-0 max-w-xl lg:py-16 lg:px-0">
          <div>
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                {route.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">{route.description}</p>
              <dl className="-mx-8 mt-4 flex flex-wrap">
                <div className="flex flex-col px-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Price
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-lime-600 sm:text-3xl sm:tracking-tight">
                    {route.price} €
                  </dd>
                </div>
                <div className="flex flex-col px-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Estimated Duration
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-lime-600 sm:text-3xl sm:tracking-tight">
                    {route.duration} minutes
                  </dd>
                </div>
                <div className="flex flex-col px-8">
                  <dt className="order-2 text-base font-medium text-gray-500">
                    Distance
                  </dt>
                  <dd className="order-1 text-2xl font-bold text-lime-600 sm:text-3xl sm:tracking-tight">
                    {route.distance} kms
                  </dd>
                </div>
              </dl>
              <div className="mt-6 text-center lg:text-left">
                <Link
                  to={`/book?route=${route.id}`}
                  className="inline-flex rounded-md border border-transparent bg-lime-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-lime-700"
                >
                  Book now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto min-w-[460px] sm:mt-16 lg:mt-0 flex flex-col gap-2">
          <div className="relative overflow-hidden h-96 w-full rounded-2xl">
            <img
              className="h-full w-full object-cover rounded-md brightness-90 hover:scale-125 absolute transition-all duration-500 ease-in-out transform"
              src={route.images[currentImage]}
              alt="Inbox user interface"
            />
          </div>
          <ul
            className="flex flex-row gap-4 justify-center h-20 w-full overflow-x-auto p-1 snap-x"
            role="listbox"
          >
            {route.images.map((image, index) => {
              const isSelected = index === currentImage;

              return (
                <button
                  key={image}
                  type="button"
                  onClick={() => setCurrentImage(index)}
                >
                  <li
                    role="option"
                    tabIndex={index}
                    aria-selected={isSelected}
                    className={classNames(
                      "w-20 h-14 rounded-lg overflow-hidden contrast-75 aria-selected:contrast-100 aria-selected:ring-2 ring-lime-400",
                      {
                        "snap-center": currentImage === index,
                      }
                    )}
                  >
                    <img
                      aria-current={isSelected}
                      src={image}
                      alt="Inbox user interface"
                      className="object-cover h-full w-full"
                    />
                  </li>
                </button>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="relative">
        <Routes routes={routes} />
      </div>
    </div>
  );
}
