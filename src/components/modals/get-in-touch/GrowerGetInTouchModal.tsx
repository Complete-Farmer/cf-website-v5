import "react-phone-number-input/style.css";
import "../../../assets/styles/phonenumberinput.css";

import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
import { XMarkIcon } from "@heroicons/react/20/solid";

import {ChevronIcon} from "@assets/icons";
// import FileIcon from "../../../assets/icons/file-alt.svg";

// import ReactGA from "react-ga4";

export default function GrowerGetInTouchModal({
  toggleModal,
}: {
  toggleModal: () => void;
}) {
  const [filePresent, setFilePresent] = useState(false);
  const [selectedFile, setSelectedFile] = useState<{
    name: string;
    size: number;
  } | null>(null);
  const [value, setValue] = useState<string>();
  const [email, setEmail] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
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

  return (
    <div className="w-2xl max-w-5xl isolate sm:w-full bg-white sm:rounded-2xl px-6 py-12">
      <div className="flex flex-row-reverse">
        <div className="flex flex-row text-center justify-end">
          <p
            className="text-xl font-bold text-right text-[#6C6C6C] hover:cursor-pointer -mt-8"
            onClick={toggleModal}
          >
            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
          </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl leading-6 md:text-2xl md:leading-[30px] font-bold sm:tracking-tight text-grower-400">
            Get in touch
          </h2>
        </div>
      </div>
      <form action="#" method="POST" className="mx-auto mt-6 max-w-xl sm:mt-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="col-span-2">
            <label
              htmlFor="first-name"
              className="text-[#6c6c6c] block text-sm font-semibold leading-5"
            >
              First Name <span className="text-[#EB2F2F]">*</span>
            </label>
            <div>
              <input
                type="text"
                name="first-name"
                id="first-name"
                placeholder="Eg. John"
                autoComplete="given-name"
                className="block w-full h-14  bg-[#EFEFEF]  rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6C6C6C] focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="email"
              className="text-[#6c6c6c] block text-sm font-semibold leading-5"
            >
              Buisiness email <span className="text-[#EB2F2F]">*</span>
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@company.com"
                autoComplete="email"
                onChange={handleEmailChange}
                className="block w-full h-14 bg-[#EFEFEF] rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-[#6C6C6C] focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-base leading-6"
              />
            </div>
          </div>

          <div className="col-span-2">
            <label
              htmlFor="phone-number"
              className="text-[#6c6c6c] block text-sm font-semibold leading-5"
            >
              Phone Number
              {/* <span className="text-[#EB2F2F]">*</span> */}
            </label>
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
              </div>
              <PhoneInput
                className="reactphone text-base leading-6"
                international
                countryCallingCodeEditable={false}
                defaultCountry="GH"
                value={value}
                onChange={handleValueChange}
                style={{ outline: "none" }}
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="cover-photo"
              className="block text-sm font-bold leading-6 text-[#6C6C6C]"
            >
              Add attachment
              {/* <span className="ms-1 text-red-500 mr-1">*</span> */}
            </label>
            {filePresent ? (
              <div className="rounded-lg border border-spacing-10 border-dashed border-grower-500 px-3 md:px-6 py-2 mt-1">
                <div className="bg-zinc-100 rounded w-full h-9 flex justify-between items-center p-2">
                  <div className="flex items-center gap-2">
                    {/* <img
                      className="h-5 w-5 text-[#6C6C6C]"
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
                      className="h-5 w-5 sm:h-8 sm:w-8 text-grower-500"
                      aria-hidden="true"
                      onClick={handleCancelUpload}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto text-center mt-1 max-w-2xl w-xl flex justify-center rounded-lg border border-spacing-10 border-dashed border-grower-500 px-6 py-2">
                <div className="text-center">
                  <div className="mt-4  text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <div className="flex items-center justify-center  mx-auto">
                        <ChevronIcon className="px-2" />
                        <span className="text-grower-500 text-center font-bold text-sm sm:text-sm">
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
                  <p className="text-xs sm:text-xs py-2 text-center leading-5 text-[#6C6C6C]">
                    Be it a rough draft or a detailed brief, as long as you find
                    it relevant. Max size:{" "}
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
            className="disabled:cursor-not-allowed block w-full rounded-md bg-grower-500 sm:px-3.5 py-2.5 text-center text-base leading-6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <span className="">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
