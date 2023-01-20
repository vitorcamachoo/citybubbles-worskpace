import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import api from "~/sdk/contentful";

type LoaderData = {
  media: Awaited<ReturnType<typeof api.Gallery>>;
};

export const loader: LoaderFunction = async () => {
  const media = await api.Gallery();
  return { media };
};

export default function Media() {
  const { media } = useLoaderData() as LoaderData;
  let [isOpen, setIsOpen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  function closeModal() {
    setIsOpen(false);
    setFullScreenImage(null);
  }

  function openModal(image: string) {
    setFullScreenImage(image);
    setIsOpen(true);
  }

  return (
    <div className="mx-auto flex w-full flex-row flex-wrap items-center justify-center gap-4 py-4 md:p-4 px-4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>
          <div className="fixed inset-0 h-full w-full overflow-y-auto">
            <div className="flex h-full w-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative transform text-left align-middle shadow-lg transition-all max-w-[80%] md:max-w-[50%]">
                  <div className="overflow-hidden rounded-2xl">
                    <button
                      onClick={closeModal}
                      className="absolute z-2 -right-4 -top-4 z-10 rounded-full bg-white py-2 px-4 font-bold hover:bg-gray-300 text-black"
                    >
                      X
                    </button>
                    <img
                      alt={fullScreenImage as string}
                      src={fullScreenImage as string}
                      className="object-contain"
                    />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      {media.galleryCollection?.items.map((image) => (
        <button
          key={image?.src?.url}
          type="button"
          onClick={() => openModal(image?.src?.url as string)}
          className="
            overflow-hidden rounded-xl
            md:h-[300px] md:w-[300px]
            lg:h-[400px] lg:w-[400px]
          "
        >
          <img
            alt={image?.src?.title ?? ""}
            src={image?.src?.url ?? ""}
            className="
                object-cover aspect-auto
                w-full h-full
                transform transition ease-in-out
                hover:scale-125 hover:opacity-50
            "
          />
        </button>
      ))}
    </div>
  );
}
