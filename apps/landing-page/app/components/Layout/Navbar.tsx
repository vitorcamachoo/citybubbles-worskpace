import { Fragment } from "react";
import { Link } from "@remix-run/react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { CompanyLogo } from "../Logo";
import { navigation } from "~/config/navigation";

export const NavBar = () => {
  return (
    <Popover>
      <nav
        className="relative mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6"
        aria-label="Global"
      >
        <div className="flex flex-1 items-center">
          <div className="flex w-full items-center justify-between md:w-auto">
            <div className="h-16 w-auto sm:h-20">
              <CompanyLogo />
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
          </div>
          <div className="hidden md:ml-10 md:block md:space-x-10">
            {navigation.main.map(({ name, href }) => (
              <Link
                key={name}
                to={href}
                className="font-medium text-gray-500 hover:text-gray-900 capitalize"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden text-right md:block">
          <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
            <Link to="/book" className="">
              <button className="rounded-md btn btn-primary btn-md btn-outline bg-white">
                book
              </button>
            </Link>
          </span>
        </div>
      </nav>

      <Transition
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
            <div className="flex items-center justify-between px-5 pt-4">
              <div className="w-full text-right -mr-2">
                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Close main menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.main.map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                >
                  {name}
                </Link>
              ))}
            </div>
            <a
              href="/book"
              className="block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100 uppercase"
            >
              <button className="rounded-md btn btn-primary btn-md btn-outline bg-white">
                book
              </button>
            </a>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};
