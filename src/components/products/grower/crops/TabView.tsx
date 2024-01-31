import { useState } from "react";

import type { IAvailableDemands } from "types/app";

import { classNames } from "@utils/functions";

// import GrowerSpecificationsCard from "./GrowerSpecificationCard";

import ProtocolImg from "@assets/images/products/grower/crop-details/protocol.webp";
import VarietyImg from "@assets/images/products/grower/crop-details/variety.webp";
import AboutImg from "@assets/images/products/grower/crop-details/about.webp";

interface IProps {
  crop: IAvailableDemands;
}

const TabView = ({ crop }: IProps) => {
  const initialTabs = [
    {
      name: "Protocol",
      title: "Protocol",
      features: [crop.websiteData.protocol],
      current: true,
      img: ProtocolImg,
      type: "normal",
    },
    {
      name: "Variety",
      title: "Variety",
      current: false,
      img: VarietyImg,

      features: [crop.websiteData.variety],
    },
    {
      name: "About",
      title: "About",
      current: false,
      img: AboutImg,

      features: [crop.websiteData.seasonality],
    },
  ];

  const [tabs, setTabs] = useState(initialTabs);
  const [currentTabData, setCurrentTabData] = useState(initialTabs[0]);

  const handleOnChangeTab = (tabName) => {
    const newTabs = tabs.map((tab) => {
      if (tab.name === tabName) tab.current = true;
      if (tab.name !== tabName) tab.current = false;
      return tab;
    });
    const activeTab = tabs.find((tab) => tab.name === tabName);
    setTabs(newTabs);
    setCurrentTabData(activeTab);
  };

  return (
    <div className="bg-white lg:mx-auto lg:max-w-7xl lg:mb-10">
      <div className="mx-auto max-w-7xl lg:py-2 sm:px-2 lg:px-8 sm:border-1 sm:border-[1px] sm:mx-8 rounded-lg sm:mb-6 lg:mb-0">
        <div className="hidden sm:hidden">
          <label htmlFor="tabs" className="sr-only">
            Select a tab
          </label>
          <select
            id="tabs"
            name="tabs"
            className="block w-full rounded-md border-gray-300 focus:border-green-500 focus:ring-green-500"
            defaultValue={tabs.find((tab) => tab.current).name}
          >
            {tabs.map((tab) => (
              <option key={tab.name}>{tab.name}</option>
            ))}
          </select>
        </div>
        <div className="sm:block">
          <nav className="flex sm:justify-center items-center border-b-[1px]">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => handleOnChangeTab(tab.name)}
                className={classNames(
                  tab.current
                    ? "text-grower-500 border-grower-500 border-b-2 font-bold"
                    : "text-gray-500 font-normal hover:text-gray-700",
                  "bg-white py-4 px-4 text-center focus:z-10 flex-1 sm:flex-none sm:w-[166px] lg:w-[auto]"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div>
          <div className="space-y-16 px-4  lg:pt-10[x] lg:pt-1[x]">
            <div className="w-full max-w-7xl">
              <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-3/5">
                  {currentTabData.title && (
                    <div className="flex items-center justify-between w-full">
                      <h2 className="text-3xl font-bold text-custom_black-900 py-8">
                        {currentTabData.title}
                      </h2>
                    </div>
                  )}

                  <div className="flex justify-start items-start self-stretch gap-4">
                    <p className="w-12/12 font-small text-custom_black-900 text-md text-base leading-6 text-left">
                      {currentTabData.features}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3 flex justify-end items-center">
                  <div className="mt-4 lg:mt-10">
                    <img
                      alt="illustration"
                      src={currentTabData.img.src}
                      className="hidden lg:block w-auto h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabView;
