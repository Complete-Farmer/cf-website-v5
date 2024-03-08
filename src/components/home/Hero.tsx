import { useState, useEffect } from "react";

import { Button, Fading, HeroRight, PlainTab } from "@components/utils";
import InitialHero from "./InitialHero";

import GrowerImage from "@assets/images/products/grower/hero-right.webp";
import BuyerImage from "@assets/images/products/buyer/hero-right.webp";

import type { AsObject, IClickEvent, ITab } from "types/app";
import { classNames, getAppLink } from "@utils/functions";

const initialTabs = [
  {
    href: "grower",
    current: true,
    name: "CF Grower",
    data: {
      title: "Farming success starts with Complete Farmer Grower",
      description:
        "Earn more by growing cash crops to meet the demand of our large network of global buyers. Get expert agronomic and managerial support throughout the farming season.",
      firstButton: {
        bgColor: "bg-grower-500",
        text: "Get Started as a grower",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-grower-500",
        bgColor: "border-grower-500",
      },
      color: "text-grower-500",
      borderColor: "border-grower-500",
      bgPattern: "bg-hero-grower",
    },
    images: {
      desktop: GrowerImage.src,
    },
  },
  {
    href: "buyer",
    current: false,
    name: "CF Buyer",
    data: {
      title: "Source crops the smarter way with Complete Farmer Buyer",
      description:
        "Source high quality produce directly from our experienced growers and enjoy the option to customize crop orders to meet your needs.",
      firstButton: {
        bgColor: "bg-buyer-500",
        text: "Get Started as a buyer",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-buyer-500",
        bgColor: "border-buyer-500",
      },
      color: "text-buyer-500",
      bgPattern: "bg-hero-buyer",
      borderColor: "border-buyer-500",
    },
    images: {
      desktop: BuyerImage.src,
    },
  },
];

const Hero = () => {
  const initialData = initialTabs[0];
  const [tabs, setTabs] = useState<ITab[]>(initialTabs);
  const [currentTab, setCurrentTab] = useState<ITab>(initialData);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const isFirstTime = JSON.parse(localStorage.getItem("isFirstTime")) ?? true;
    if (isFirstTime) {
      localStorage.setItem("isFirstTime", (!isFirstTime).toString());
    }
    setIsFirstTime(isFirstTime);
  }, []);

  const changeTab = (e: IClickEvent, tab: ITab) => {
    e.preventDefault();
    const newTabs = tabs.map((item) => {
      if (item.name === tab.name) item.current = true;
      if (item.name !== tab.name) item.current = false;
      return item;
    });
    setCurrentTab(tab);
    setTabs(newTabs);
  };

  const firstButton = currentTab.data.firstButton as AsObject<string>;
  const secondButton = currentTab.data.secondButton as AsObject<string>;

  const LeftComp = () => (
    <div className="w-full xl:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start sm:items-center justify-center space-y-10">
      <Fading left>
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex justify-start items-start w-full">
            <PlainTab
              tabs={tabs}
              changeTab={changeTab}
              color={currentTab.data.color as string}
              borderColor={currentTab.data.borderColor as string}
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="w-full text-[28px] sm:text-5xl font-bold text-center leading-9 xl:text-left">
              {currentTab.data.title as string}&nbsp;
            </p>
            <p className="w-full text-base sm:text-xl text-center xl:text-left">
              {currentTab.data.description as string} &nbsp;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between xl:justify-start items-start gap-6">
            <a
              target="_blank"
              href={getAppLink("Signup " + currentTab.name)}
              className="contents"
              rel="noreferrer"
            >
              <Button
                title={firstButton.text}
                className={classNames(
                  `!${firstButton.bgColor}`,
                  "py-4 text-xl !rounded-full sm:!w-1/2 xl:!w-[290px] !font-bold"
                )}
              />
            </a>

            <a href={"/products/?tab=" + currentTab.href} className="contents">
              <Button
                title={secondButton.text}
                className="py-4 sm:!w-1/2 xl:!w-[180px] text-xl !rounded-full !bg-white !text-grower-900 !font-bold"
              />
            </a>
          </div>
        </div>
      </Fading>
    </div>
  );

  return (
    <>
      {isFirstTime ? (
        <InitialHero />
      ) : (
        <section
          className={classNames(
            currentTab.data.bgPattern as string,
            "w-full px-6 sm:px-10 pb-20 sm:pb-48 xl:pb-32 text-white bg-cover"
          )}
        >
          <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
            <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center xl:flex-row flex-col h-full">
              <LeftComp />

              <HeroRight
                className="hidden"
                key={currentTab.name}
                images={currentTab.images}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
