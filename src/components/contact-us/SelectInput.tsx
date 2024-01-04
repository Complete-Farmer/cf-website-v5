/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import ChevronDown from "../../assets/icons/chevron-down.svg";
import ChevronUp from "../../assets/icons/chevron-up.svg";

interface IProps {
  selected: any;
  setSelected: (e: any) => void;
  people: {
    id: string;
    name: string;
  }[];
}

export default function SelectInput({ people, selected, setSelected }: IProps) {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <Fragment>
          <div className="relative mt-6">
            <Listbox.Button className="h-14 relative rounded-lg bg-[#efefef]  w-full cursor-default  py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <span className="block truncate">{selected.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <img src={open ? ChevronUp.src : ChevronDown.src} />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {people.map((person) => (
                  <Listbox.Option key={person.id} value={person}>
                    {() => (
                      <>
                        <div className=" flex-shrink-0 h-12 relative rounded-lg bg-white hover:bg-[#f6f6f6] hover:cursor-pointer">
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
        </Fragment>
      )}
    </Listbox>
  );
}
