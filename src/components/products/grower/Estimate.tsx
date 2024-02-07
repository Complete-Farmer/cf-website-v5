import { useState } from "react";

import ComimgSoon from "@assets/images/products/grower/coming-soon.png";

import EstimateModal from "./EstimateModal";
import { Button, Wrapper, Selector } from "@components/utils";

const items = [
  { id: 1, name: "Soybean" },
  { id: 2, name: "Chilli Pepper" },
  { id: 3, name: "Sweet Potato" },
  { id: 4, name: "Ginger" },
];

const estimate = [
  { id: 1, name: "1 year" },
  { id: 2, name: "2 years" },
  { id: 3, name: "3 years" },
  { id: 4, name: "4 years" },
  { id: 5, name: "5 years" },
  { id: 6, name: "6 years" },
  { id: 7, name: "7 years" },
];

export default function Estimate() {
  const [selected, setSelected] = useState(items[0]);
  const [estimated, setEstimated] = useState(estimate[0]);
  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };
  const isComingSoon = true;

  const handleOnCropChange = (value: (typeof items)[0]) => {
    setSelected(value);
  };

  const handleOnEstimatedChange = (value: (typeof estimate)[0]) => {
    setEstimated(value);
  };

  return (
    <section className="py-20 bg-grower-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center">
          <div className="">
            <h2 className="text-[28px] md:text-[40px] lg:text-5xl leading-8 md:leading-[50px] lg:leading-[60px]  font-semibold tracking-tight text-white text-center lg:text-left">
              Estimate your cost and revenue with our farm plan generator
            </h2>
            <p className="text-xs md:text-base  lg:leading-8 lg:text-xl  text-white text-center lg:text-left py-6 px-8 lg:px-0">
              Pick a number of acre, crop and duration and it generates a custom
              plan for your farm project
            </p>
          </div>
          <div className="w-full px-4 flex justify-center items-center">
            <div
              className={`${
                isComingSoon ? "relative" : ""
              } w-full max-w-2xl mx-auto lg:mr-0 lg:ml-auto`}
            >
              <div className="isolate bg-white rounded-2xl">
                <div
                  className="max-[767px]:p-4 relative z-10 h-auto p-8 py-10 px-7"
                  data-rounded="rounded-lg"
                  data-rounded-max="rounded-full"
                >
                  <h3 className="max-[767px]:text-[24px] font-semibold mb-6 text-[32px] leading-10 lg:w-6/6 lg:h-10 text-center text-custom_black-900">
                    Farm plan generator
                  </h3>
                  <form className="mx-auto mt-4 max-w-2xl w-full sm:mt-6">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                      <div className="sm:col-span-12">
                        <label
                          htmlFor="firstName"
                          className="block text-base h-6 font-semibold leading-6 text-gray-500"
                        >
                          Select crop to farm
                        </label>
                        <Selector
                          options={items}
                          selected={selected}
                          setSelected={handleOnCropChange}
                        />
                      </div>
                      <div className="sm:col-span-12 -mt-2">
                        <label
                          htmlFor="email"
                          className="block text-base h-6 font-semibold leading-6 text-gray-500"
                        >
                          Enter land size (acres)
                        </label>
                        <div className="mt-1">
                          <input
                            required
                            id=""
                            name=""
                            type="text"
                            autoComplete=""
                            placeholder="Eg. 10"
                            className="block w-full h-14 rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset bg-[#EFEFEF] ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-12 -mt-2">
                        <label
                          htmlFor="email"
                          className="block text-base h-6 font-semibold leading-6 text-gray-500"
                        >
                          Select duration
                        </label>
                        <Selector
                          options={estimate}
                          selected={estimated}
                          setSelected={handleOnEstimatedChange}
                        />
                      </div>
                      <div className="sm:col-span-12 mt-4">
                        <Button
                          onClick={toggleModal}
                          title="Get the farm plan"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {isComingSoon && (
                <div className="flex absolute top-0 bottom-0 bg-gray-100/70 h-full w-full">
                  <img
                    src={ComimgSoon.src}
                    alt="Comimg Soon"
                    className="m-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Wrapper
        isOpen={open}
        onClose={() => toggleModal()}
        className="flex w-full h-full transform text-left text-base transition md:my-20 md:max-w-2xl md:px-4 lg:max-w-2xl"
      >
        <EstimateModal toggleModal={toggleModal} />
      </Wrapper>
    </section>
  );
}
