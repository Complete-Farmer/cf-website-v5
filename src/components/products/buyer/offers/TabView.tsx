import { useState } from "react";

import { classNames } from "@utils/functions";

import Seasonality from "./Seasonality";
import AvailableSpecification from "./AvailableSpecification";

import type { IAvailableCropOffers } from "types/app";

interface IProps {
  offer: IAvailableCropOffers;
}

const TabView = ({ offer }: IProps) => {
  const initialTabs = [
    {
      name: "Seasonality",
      current: true,
      type: "normal",
    },
    {
      name: "Specifications",
      current: false,
    },
  ];

  const [tabs, setTabs] = useState(initialTabs);
  const [currentTabData, setCurrentTabData] = useState(initialTabs[0]);

  const handleOnChangeTab = (tabName: string) => {
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
                    ? "text-buyer-500 border-buyer-500 border-b-2 font-bold"
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

        <div className="pt-5">
          {currentTabData.type === "normal" ? (
            <Seasonality content={offer.features} data={offer.seasonality} />
          ) : (
            <AvailableSpecification data={offer.specs} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TabView;
