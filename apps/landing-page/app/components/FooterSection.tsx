import { Link } from "@remix-run/react";
import { navigation } from "~/config/navigation";
import { SocialNetworks } from "./SocialNetworks";
import { MainSponsor } from "./Sponsors";

export const FooterSection = () => {
  return (
    <>
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8 space-y-6">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {navigation.footer.map(({ name, href }) => (
              <Link
                to={href}
                className="px-5 py-2 text-base text-gray-500 hover:text-gray-900 capitalize"
                key={name}
              >
                {name}
              </Link>
            ))}
          </nav>
          <div className="flex justify-center space-x-6 text-gray-500">
            <SocialNetworks />
          </div>
          <div className="flex justify-center space-x-6 text-gray-500">
            <MainSponsor />
          </div>
          <div className="border-t border-gray-200 pt-8 flex flex-col items-center gap-y-4 lg:flex-row justify-between">
            <div>
              <span className="text-base text-gray-400">
                &copy; 2014 Citybubbles, Inc. All rights reserved.
              </span>
            </div>
            <div className="flex gap-4 items-center uppercase">
              {navigation.subfooter.map(({ name, href }) => (
                <Link
                  key={href}
                  to={href}
                  className="uppercase text-sm text-gray-400"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
