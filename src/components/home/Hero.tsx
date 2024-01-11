/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";

import BuyerHeroRight from "@assets/images/products/grower/hero-right.webp";
import GrowerHeroRight from "@assets/images/products/buyer/hero-right.webp";

import InitialHero from "./InitialHero";
import PlainTab from "@components/utils/PlainTab";
import HeroRight from "@components/utils/HeroRight";

const initialTabs = [
  {
    name: "CF Grower",
    href: "grower",
    current: true,
    data: {
      title: "Farming success starts with Complete Farmer Grower",
      titleTextColor: "text-white",
      description:
        "Earn more by growing cash crops to meet the demand of our large network of global buyers. Get expert agronomic and managerial support throughout the farming season.",
      descriptionTextColor: "text-white",
      firstButton: {
        text: "Get Started as a grower",
        textColor: "text-white",
        bgColor: "bg-grower-500",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-grower-500",
        bgColor: "border-grower-500",
      },
      color: "text-grower-500",
      borderColor: "border-grower-500",
      bgPattern: "bg-hero-grower",
      rightSvgFillColor: "#E58C00",
    },
    rightImage: BuyerHeroRight,
  },
  {
    name: "CF Buyer",
    href: "buyer",
    current: false,
    data: {
      title: "Source crops the smarter way with Complete Farmer Buyer",
      titleTextColor: "text-white",
      description:
        "Source high quality produce directly from our experienced growers and enjoy the option to customize crop orders to meet your needs.",
      descriptionTextColor: "text-white",
      firstButton: {
        text: "Get Started as a buyer",
        textColor: "text-white",
        bgColor: "bg-buyer-500",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-buyer-500",
        bgColor: "border-buyer-500",
      },
      color: "text-buyer-500",
      borderColor: "border-buyer-500",
      bgPattern: "bg-hero-buyer",
      rightSvgFillColor: "#00FFE0",
    },
    rightImage: GrowerHeroRight,
  },
];

const Hero = () => {
  const initialData = initialTabs[0];
  const [tabs, setTabs] = useState(initialTabs);
  const [currentTab, setCurrentTab] = useState(initialData);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const isFirstTime = JSON.parse(localStorage.getItem("isFirstTime")) ?? true;
    if (isFirstTime) {
      localStorage.setItem("isFirstTime", (!isFirstTime).toString());
    }
    setIsFirstTime(isFirstTime);
  }, []);

  const changeTab = (selectedTabItem: any) => {
    const newTabs = tabs.map((item) => {
      if (item.name === selectedTabItem.name) item.current = true;
      if (item.name !== selectedTabItem.name) item.current = false;
      return item;
    });
    setCurrentTab(selectedTabItem);
    setTabs(newTabs);
  };

  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "See a demo"
    // });
    // window.metapixelfunction("demo", "see_a_demo", {});
    // window.dataLayer.push({
    //   event: "see_a_demo"
    // });
  };

  // Left
  const LeftComp = () => (
    <div className="w-full xl:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start sm:items-center justify-center space-y-10">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex justify-start items-start w-full">
            <PlainTab
              tabs={tabs}
              changeTab={changeTab}
              color={currentTab.data.color}
              borderColor={currentTab.data.borderColor}
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p
              className={`w-full text-[28px] sm:text-5xl font-bold text-center leading-9 xl:text-left ${currentTab.data.titleTextColor}`}
            >
              {currentTab.data.title}&nbsp;
            </p>
            <p
              className={`w-full text-xl sm:font-medium text-center xl:text-left ${currentTab.data.descriptionTextColor}`}
            >
              {currentTab.data.description} &nbsp;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between xl:justify-start items-start gap-6">
            <button
              onClick={handleButtonClick}
              className={`flex justify-center items-center w-full xl:w-auto h-16 gap-2 px-8 py-4 rounded-full ${currentTab.data.firstButton.bgColor}`}
            >
              <span
                className={`text-xl font-bold text-left ${currentTab.data.firstButton.textColor}`}
              >
                {currentTab.data.firstButton.text}
              </span>
            </button>
            <a
              href={"/product?tab=" + currentTab.href}
              onClick={() => handleButtonClick()}
              className="flex justify-center items-center w-full xl:w-[230px] h-16  gap-2 px-8 py-4 rounded-full bg-white"
            >
              <span className={"text-xl font-bold text-left text-black"}>
                {currentTab.data.secondButton.text}
              </span>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );

  return (
    <>
      {isFirstTime ? (
        <InitialHero />
      ) : (
        <section
          className={`w-full px-6 sm:px-10 bg-white pb-20 sm:pb-48 xl:pb-32 bg-cover ${currentTab.data.bgPattern}`}
        >
          <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
            <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center xl:flex-row flex-col h-full">
              <LeftComp />

              <HeroRight
                key={currentTab.name}
                imageSrc={currentTab.rightImage.src}
                fill={currentTab.data.rightSvgFillColor}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
