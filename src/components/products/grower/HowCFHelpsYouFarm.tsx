import { Tab } from "@headlessui/react";

import { classNames } from "@utils/functions";

import ArgonomicSupportImg from "@assets/images/products/grower/how-cf-helps-your-farm/agronomic-support.png";
import PremiumMarketAccessImg from "@assets/images/products/grower/how-cf-helps-your-farm/premium-market-access.png";
import ManagementSolutionImg from "@assets/images/products/grower/how-cf-helps-your-farm/farm-management-solution.png";
import HeadingOneLine from "@components/utils/HeadingOneLine";

const categories = [
  {
    id: 0,
    slug: "grower",
    img: ArgonomicSupportImg.src,
    title: "Agronomic support",

    description:
      "Hire experienced farm managers from our marketplace to oversee the day-to-day operations on your farm while you monitor progress via your dashboard.",
  },
  {
    id: 1,
    slug: "buyer",
    img: PremiumMarketAccessImg.src,
    title: "Premium Market Access",
    description:
      "Grow to fulfil purchase orders placed by our network of buyers and see in advance the price per tonne you’ll be paid after fulfilment.",
  },
  {
    id: 2,
    slug: "buyer",
    img: ManagementSolutionImg.src,
    title: "Farm Management Solution",
    description:
      "Track progress with easy-to-use farm monitoring tools and tackle pest and disease occurrences quickly with support from expert agronomists who provide you with actionable steps to identify and treat them.",
  },
];

const HowCFHelpsYouFarm = () => {
  return (
    <div className="space-y-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-4 mt-20 text-center sm:py-2 lg:mt-32 lg:px-20">
        <HeadingOneLine
          titleFontSize="text-2xl md:text-[40px]"
          title=" How Complete Farmer Grower helps you get started farming the easy way"
          desc="The platform is equipped with a wide range of features that help
            reduce barriers to entry for new farmers and provide a rewarding
            farming experience."
        />

      </div>

      <div className="flex justify-center">
        <div className="overflow-auto">
          <Tab.Group>
            <div className="flex justify-center px-4 lg:px-0">
              <Tab.List className="flex space-x-1 rounded-full p-0.5 bg-[#EFEFEF] overflow-auto no-scrollbar">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    className={({ selected }) =>
                      classNames(
                        "w-full rounded-full py-4 px-6 text-base leading-5 whitespace-nowrap ",
                        " focus:outline-none ",
                        selected
                          ? "bg-grower-500 shadow text-white"
                          : "bg-[#EFEFEF] text-custom_black-900"
                      )
                    }
                  >
                    {category.title}
                  </Tab>
                ))}
              </Tab.List>
            </div>

            <Tab.Panels className="mt-2">
              {categories.map((category) => (
                <Tab.Panel key={category.id}>
                  <section className="max-w-7xl mx-auto px-4 py-10 lg:py-28">
                    <div className="z-25 bg-white">
                      <div className="w-full">
                        <div className="flex flex-col lg:flex-row items-center justify-center">
                          <div className="flex flex-col justify-center w-full px-5">
                            <h1 className="text-2xl md:text-[32px] lg:text-5xl leading-7  md:leading-10 md:text-left lg:leading-[60px] font-bold py-4">
                              {category.title}
                            </h1>
                            <p className="text-xs text-custom_gray-300 mb-8 md:text-xl  lg:text-xl lg:leading-7 lg:text-custom_black-900">
                              {category.description}
                            </p>
                          </div>
                          <div className="w-full rounded-lg px-8 pb-12">
                            <img
                              src={category.img}
                              className="z-10 object-cover mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default HowCFHelpsYouFarm;
