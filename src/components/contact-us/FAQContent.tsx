import { Disclosure, Transition } from "@headlessui/react";
import { IFaQ } from "types/app";

interface IProps {
  faqs: IFaQ[];
}

const FAQContent = ({ faqs }: IProps) => {
  return (
    <section className="full bg-white pt-20 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-6 md:px-6 xl:px-6">
        <div className="max-w-7xl border-b pb-7">
          <h2 className="text-[20px] md:text-[28px] lg:text-[40px] font-bold leading-10 tracking-tight text-custom_gray-600 mb-0 sm:mb-12 md:mb-5">
          Get started with Complete Farmer
          </h2>
          <dl className="space-y-6 divide-y divide-gray-900/10">
            {faqs?.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-bold leading-7">{faq.question}</span>
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
                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FAQContent;