import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { routes } from "~/sdk/mock";

export async function loader() {
  return json({ routes });
}

export default function () {
  const { routes } = useLoaderData<typeof loader>();

  return (
    <div className="relative mx-auto max-w-full w-full lg:max-w-7xl">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-lime-500 sm:text-4xl">
          Our tours
        </h2>
        <p className="mx-auto mt-3 max-w-5xl text-xl text-gray-500 sm:mt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus
          sed.
        </p>
      </div>
      <div className="flex flex-wrap gap-8 justify-center mx-auto mt-8">
        {routes.map((route) => (
          <Link to={`/routes/${route.id}`} key={route.id}>
            <div className="flex flex-col rounded-lg shadow-lg w-80">
              <div className="relative overflow-hidden h-64 w-full rounded-2xl">
                <img
                  className="h-full w-full object-cover rounded-md brightness-75 hover:brightness-90 hover:scale-125 absolute transition-all duration-500 ease-in-out transform"
                  src={route.images[0]}
                  alt="place"
                />
              </div>

              <div className="flex flex-col h-64 gap-4 pt-4">
                <div className="pb-8 px-6">
                  <p className="text-2xl font-semibold text-gray-900">
                    {route.title}
                  </p>
                  <p className="flex flex-row gap-4 pt-1">
                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      {route.price} €
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      {route.duration} m
                    </span>
                    <span className="inline-flex items-center rounded-full bg-lime-500 px-2.5 py-0.5 text-xs font-medium text-white">
                      {route.distance} km
                    </span>
                  </p>
                  <p className="mt-3 text-base text-gray-500 line-clamp-6">
                    {route.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
