import { Tab } from "@components/utils";
import { useMemo, useState } from "react";
import { LocationIcon } from "@assets/icons";

const tabs = [
  {
    name: "Ghana",
    current: true,
  },
  {
    name: "Togo",
    current: false,
  },
];

const data = {
  ghana: {
    data: [
      { id: 1, name: "Karaga" },
      { id: 2, name: "Sisala East and West" },
      { id: 3, name: "Nanton and Savelugu" },
      { id: 4, name: "Gushegu" },
      { id: 5, name: "Berekum" },
      { id: 6, name: "Wenchi" },
      { id: 7, name: "Ada" },
      { id: 8, name: "Afram Plains" },
      { id: 9, name: "Techiman" },
      { id: 10, name: "Juapong" },
    ],
  },
  togo: {
    data: [
      { id: 1, name: "Lome" },
      { id: 2, name: "Dapaong" },
      { id: 3, name: "Elavagnon" },
    ],
  },
};

const OperationalLocations = () => {
  const [activeCountry, setActiveCountry] = useState("Ghana");

  const changeCategory = (i: number) => {
    const catIndex = i === 0 ? "Ghana" : "Togo";
    tabs.filter((c) => {
      if (c.name === catIndex) c.current = true;
      if (c.name !== catIndex) c.current = false;
      return c;
    });
    const activeCat = tabs.find((i) => i.name === catIndex);
    setActiveCountry(activeCat.name);
  };

  const activeTabData = useMemo(
    () => (activeCountry === "Togo" ? data.togo : data.ghana),
    [activeCountry]
  );

  return (
    <div className="w-full bg-grower-400 bg-operational-locations bg-cover">
      <div className="flex flex-col sm:items-center space-y-10 sm:space-y-0 py-20">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-[28px] leading-8 h-8 w-[293px] md:text-[40px] md:leading-[50px] md:h-12 md:w-full lg:text-5xl lg:leading-[60px] lg:h-14 font-bold text-center text-white">
              Operational Locations
          </p>
          <div className="flex items-center justify-center relative w-full px-4">
            <Tab
              categories={tabs}
              changeCategory={changeCategory}
              activeBgColor="bg-grower-500"
              inActiveBgColor="bg-grower-400"
              normalBgColor="bg-grower-400"
              inActiveTextColor="text-white"
            />
          </div>
        </div>
        <div className="max-w-5xl px-4 sm:px-20 justify-start items-center grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 sm:gap-x-16 lg:gap-x-52 lg:gap-y-10">
          {activeTabData.data.map((tabItem) => (
            <div
              key={tabItem.id}
              className="flex justify-start items-center gap-6 sm:min-w-[305px]"
            >
              <div className="flex justify-start items-start gap-2.5 p-2 rounded-lg bg-grower-900">
                <LocationIcon className="text-grower-500" />
              </div>
              <p className="md:text-base lg:w-[73px]x h-6 lg:text-2xl lg:w-auto lg:h-7 font-bold text-left text-white">
                {tabItem.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperationalLocations;
