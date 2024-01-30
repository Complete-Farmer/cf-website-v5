import "@assets/styles/getintouchinput.css";
import "react-phone-number-input/style.css";

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { XMarkIcon } from "@heroicons/react/20/solid";

import BuyerGetInTouchTab from "./BuyerGetInTouchTab";
import CalendlyIntegration from "./CalendlyIntegration";

import { ChevronIcon } from "@assets/icons";
import type { IClickEvent } from "types/app";
// import FileIcon from "@assets/icons/file-alt.svg";

// import ReactGA from "react-ga4";

const mockCateogries = [
  {
    name: "Fill in a form",
    slug: "grower",
    current: true,
  },
  {
    name: "Schedule a call",
    slug: "buyer",
    current: false,
  },
];

function BuyerGetInTouchModal({ toggleModal }: { toggleModal: () => void }) {
  const [categories, setCategories] = useState(mockCateogries);
  const [activeCategory, setActiveCategory] =
    useState<string>("Fill in a form");
  const [filePresent, setFilePresent] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: number;
  } | null>(null);
  const [value, setValue] = useState<string>();
  const [email, setEmail] = useState("");
  // const activeBgColor = activeCategory === "Grower" ? "bg-grower-500" : "bg-buyer-500";
  const activeBgColor = "bg-buyer-500";

  const changeCategory = (i: number) => {
    const catIndex = i === 0 ? "Fill in a form" : "Schedule a call";
    mockCateogries.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    const activeCat = mockCateogries.find((i) => i.name === catIndex);
    setCategories(mockCateogries);
    activeCat && setActiveCategory(activeCat.name);
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setFilePresent(true);
      setSelectedFile(file);
    }
  };

  const handleCancelUpload = () => {
    setFilePresent(false);
    setSelectedFile(null);
  };

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = (e: IClickEvent) => {
    e.preventDefault();

    if (!isValidEmail) {
      return;
    }

    // ReactGA.event({
    //   category: "Button Click",
    //   action: "Send"
    // });

    // window.metapixelfunction("send", "details_send", {});

    // window.dataLayer.push({
    //   event: "details_send"
    // });
  };

  return (
    <div className="w-full max-w-5xl isolate bg-white px-6 py-8 sm:py-8 lg:px-8 rounded-2xl">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex flex-row-reverse">
          <div className="flex flex-row text-center justify-end">
            <p
              className="text-xl font-bold text-right text-custom_gray-300 hover:cursor-pointer -mt-6"
              onClick={toggleModal}
            >
              <XMarkIcon className="h-8 w-8" aria-hidden="true" />
            </p>
          </div>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-[#00194C]">
              Get in touch
            </h2>
          </div>
        </div>

        <div className="relative flex rounded-full bg-white w-full max-w-5xl mx-auto">
          <div className="relative w-full px-4 mx-auto text-center">
            <span className="flex items-center justify-center">
              <BuyerGetInTouchTab
                categories={categories}
                changeCategory={changeCategory}
                activeCategory={activeCategory}
                activeBgColor={activeBgColor}
                inActiveBgColor={"bg-[#EFEFEF]"}
                normalBgColor={"bg-[#EFEFEF]"}
                inActiveTextColor={"text-custom_black-900"}
              />
            </span>
          </div>
        </div>
      </div>
      {/*  Fill in a form */}
      {activeCategory === "Fill in a form" && (
        <form
          action="#"
          method="POST"
          className="mx-auto mt-3 max-w-2xl w-2xl md:mt-1"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="sm:col-span-12">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-custom_gray-300"
              >
                First Name<span className="text-[#EB2F2F]">*</span>
              </label>
              <div className="mt-1">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Eg. John"
                  className="block w-full rounded-md bg-[#efefef] border-0 px-3.5 py-2 text-custom_gray-300 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-12">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-custom_gray-300"
              >
                Business email<span className="text-[#EB2F2F]">*</span>
              </label>
              <div className="mt-1">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="example@company.com"
                  onChange={handleEmailChange}
                  className="block w-full rounded-md bg-[#efefef] border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-12">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-custom_gray-300"
              >
                Phone Number
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                </div>
                <PhoneInput
                  className="getintouch"
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="GH"
                  value={value}
                  onChange={handleValueChange}
                  placeholder="23 456 7890"
                  style={{ outline: "none" }}
                />
              </div>
            </div>

            <div className="sm:col-span-12">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-bold leading-6 text-custom_gray-300"
              >
                Add attachment
              </label>
              {filePresent ? (
                <div className="rounded-lg border border-spacing-10 border-dashed border-buyer-500 px-3 md:px-6 py-2 mt-1">
                  <div className="bg-zinc-100 rounded w-full h-9 flex justify-between items-center p-2">
                    <div className="flex items-center gap-2">
                      {/* <img
                        className="h-5 w-5 text-custom_gray-300"
                        src={FileIcon.src}
                        alt="File Icon"
                      /> */}
                      {selectedFile && (
                        <>
                          <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${selectedFile.name}`}</div>
                          <div className="text-neutral-500 text-xs md:text-sm font-normal leading-tight">{`${Math.round(
                            selectedFile.size / 1024
                          )}kb`}</div>
                        </>
                      )}
                    </div>
                    <div className="flex items-end justify-end cursor-pointer">
                      <XMarkIcon
                        className="h-5 w-5 sm:h-8 sm:w-8 text-buyer-500"
                        aria-hidden="true"
                        onClick={handleCancelUpload}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mx-auto text-center mt-1 max-w-2xl w-xl flex justify-center rounded-lg border border-spacing-10 border-dashed border-buyer-500 px-6 py-2">
                  <div className="text-center">
                    <div className="mt-4  text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                      >
                        <div className="flex items-center justify-center  mx-auto">
                          <ChevronIcon className="px-2" />
                          <span className="text-buyer-500 text-center font-bold text-lg">
                            Browse or drag & drop file
                          </span>
                        </div>

                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileUpload}
                        />
                      </label>
                    </div>
                    <p className="text-sm py-2 text-center leading-5 text-custom_gray-300">
                      Be it a rough draft or a detailed brief, as long as you
                      find it relevant. Max size:{" "}
                      <span className="font-bold">10MB</span>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              onClick={handleButtonClick}
              disabled={!isValidEmail}
              className="disabled:cursor-not-allowed block w-full rounded-md bg-buyer-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send
            </button>
          </div>
        </form>
      )}

      {activeCategory === "Schedule a call" && (
        <>
          <CalendlyIntegration />
        </>
      )}
    </div>
  );
}

export default BuyerGetInTouchModal;
