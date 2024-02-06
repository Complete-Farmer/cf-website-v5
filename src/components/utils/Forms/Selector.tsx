import { Fragment } from "react";
import { ChevronIcon } from "@assets/icons";
import { Listbox, Transition } from "@headlessui/react";

type IItem = { id: number | string; name: string };

interface IProps {
  options: IItem[];
  selected: IItem;
  setSelected: (e: IItem) => void;
}

export default function Selector({
  selected,
  setSelected,
  options: items,
}: IProps) {
  return (
    <Listbox
      as="div"
      value={selected}
      onChange={setSelected}
      className="w-full"
    >
      {({ open }) => (
        <div className="relative mt-2">
          <Listbox.Button className="h-14 relative rounded-lg bg-[#efefef]  w-full cursor-default  py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-grower-500 sm:text-sm sm:leading-6">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronIcon className={open ? "rotate-180" : ""} />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((person) => (
                <Listbox.Option key={person.id} value={person}>
                  {() => (
                    <>
                      <div className=" flex-shrink-0 h-12 relative rounded-lg bg-white hover:bg-custom_gray-400 hover:cursor-pointer">
                        <p className="absolute left-4 top-3 text-base text-left text-custom_black-900">
                          {person.name}&nbsp;
                        </p>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
