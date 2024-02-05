import { Tab } from "@components/utils";
import { useState } from "react";
import ImpactReportCard from "./ImpactReportCard";

const tabs = [
  {
    id: 0,
    current: true,
    name: "Impact Reports",
    description:
      "Hire experienced farm managers from our marketplace to oversee the day-to-day operations on your farm while you monitor progress via your dashboard.",
  },
  {
    id: 1,
    name: "Vivid Vision Reports",
    current: false,
    description:
      "Access precision farming tools powered by Information and satellite technology that allow real-time crop and farm management for optimum crop health and better decision-making ",
  },
  {
    id: 2,
    name: "White Papers",
    current: false,
    description:
      "Access post-harvest handling and storage solutions for your crops and sell to reliable local and international buyers who pay immediately after you deliver your crops to the nearest fulfilment centre ",
  },
];

interface IProps {
  data?: {
    "Impact Reports": string[];
    "Vivid Vision Reports": string[];
    "White Papers": string[];
  };
}

const ReportsAndWhitePapers = ({ data }: IProps) => {
  const [activeCategory, setActiveCategory] = useState(tabs[0]);
  const [categories, setCategories] = useState(tabs);

  const changeCategory = (i: number) => {
    const newCat = tabs.map((c) => {
      if (c.id === i) c.current = true;
      if (c.id !== i) c.current = false;
      return c;
    });
    const activeCat = newCat.find((c) => c.current);
    setActiveCategory(activeCat);
    setCategories(newCat);
  };

  return (
    <section className="py-14 lg:py-24 bg-custom_gray-400">
      <div className="max-w-7xl mx-auto sm:px-14 xl:px-0 space-y-7 xl:space-y-0">
        <h3 className="text-[28px] md:text-[32px] leading-[34px] md:leading-10 font-bold text-center sm:text-left text-grower-400">
          Impact reports & white papers
        </h3>

        <Tab
          categories={categories}
          normalBgColor="bg-[#E6E6E6] overflow-auto no-scrollbar"
          className="sm:w-3/4 xl:w-full"
          changeCategory={changeCategory}
          activeBgColor="bg-grower-500"
          inActiveBgColor="bg-[#E6E6E6]"
          inActiveTextColor="text-[#6C6C6C]"
        />

        {data?.[activeCategory.name].length ? (
          <div className="flex flex-col px-4 sm:px-0 sm:grid sm:grid-cols-2 gap-6 items-center justify-center xl:flex-row xl:max-w-full">
            {data[activeCategory.name].map(({ name }, index: number) => (
              <ImpactReportCard key={name + index} name={name} />
            ))}
          </div>
        ) : (
          <p className="text-zinc-900 text-base">
            There are no {activeCategory.name} available at the moment
          </p>
        )}
      </div>
    </section>
  );
};

export default ReportsAndWhitePapers;
