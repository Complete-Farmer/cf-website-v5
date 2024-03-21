import { Disclosure, Transition } from "@headlessui/react";

import { ChevronIcon } from "@assets/icons";

import ContactForm from "./ContactForm";

interface IProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faqs: any[];
  toggle: boolean;
  loading: boolean;
  subject: string;
  onLoadMore: () => void;
  changeToggle: () => void;
  isLoadMore: () => boolean;
}
export default function Content({
  faqs,
  toggle,
  loading,
  subject,
  onLoadMore,
  isLoadMore,
  changeToggle,
}: IProps) {
  return (
    <div>
      <div>
        <p className="mt-6 text-sm sm:text-xl font-bold text-left text-custom_black-900">
          We think these might help:
        </p>
      </div>
      <div className="mt-4 flex flex-col justify-start items-start relative gap-4">
        {/* {faqs.map((item) => {
          return (
            <a
              key={item.id}
              href="/contact-us/get-started"
              className="underline text-sm sm:text-base text-left text-grower-500 hover:font-bold"
            >
              {item.question}
            </a>
          );
        })} */}
        <dl className="divide-y divide-gray-900/10">
          {faqs?.map((faq) => (
            <Disclosure as="div" key={faq.id} className="py-5 hover:bg-slate-50">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-sm sm:text-base text-left text-grower-500 font-bold">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center text-2xl text-[#31BC2E]">
                        {open ? (
                          <span className="text-4xl">
                              -
                          </span>
                        ) : (
                          <span>
                              +
                          </span>
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Transition
                    enter="transition duration-500 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-400 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-left text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </dl>

        {isLoadMore() && (
          <div className="flex justify-end w-full mt-4">
            <button
              onClick={onLoadMore}
              disabled={loading}
              className="flex justify-start items-start relative gap-2"
            >
              <p className="text-sm font-bold text-left text-grower-500 hover:underline">
                {loading ? "Loading" : "Load more"}
              </p>
            </button>
          </div>
        )}
      </div>

      <div className="mt-8">
        <p className="text-sm sm:text-xl font-bold text-left text-custom_black-900">
          Didn&apos;t find what you&apos;re looking for?
        </p>
      </div>
      <div className="mt-12">
        {!toggle && (
          <button
            onClick={changeToggle}
            className="flex justify-start items-start relative gap-2"
          >
            <p className="text-base font-bold text-left text-grower-500">
              Contact our team
            </p>
            <ChevronIcon />
          </button>
        )}
        {toggle && <ContactForm subject={subject} changeToggle={changeToggle} />}
      </div>
    </div>
  );
}
