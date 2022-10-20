import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const ButtonDown = () => (
  <div className="absolute bottom-8 w-full flex items-center justify-center">
    <button>
      <ChevronDownIcon className="flex-1 text-primary h-8 w-8 animate-bounce" />
    </button>
  </div>
);
