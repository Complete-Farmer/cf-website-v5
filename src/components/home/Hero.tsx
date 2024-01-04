/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import PlainTab from "../../components/utils/PlainTab";
import Typed from "react-typed";

import Illustration from "../../assets/images/home/hero-illustration.svg";
import CfGrowerLogoOne from "../../assets/images/grower/team2.png";
import CfGrowerLogoTwo from "../../assets/images/grower/team1.png";
import CfBuyerLogoOne from "../../assets/images/buyer/team3.svg";
import CfBuyerLogoTwo from "../../assets/images/buyer/team4.svg";

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
        bgColor: "bg-custom_lightgreen-500",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-custom_lightgreen-500",
        bgColor: "border-custom_lightgreen-500",
      },
      color: "text-custom_lightgreen-500",
      borderColor: "border-custom_lightgreen-500",
      bgPattern: "bg-hero-pattern",
      rightSvgFillColor: "#E58C00",
    },
    logoOne: CfGrowerLogoOne,
    logoTwo: CfGrowerLogoTwo,
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
        bgColor: "bg-[#367AFE]",
      },
      secondButton: {
        text: "See a demo",
        textColor: "text-[#367AFE]",
        bgColor: "border-[#367AFE]",
      },
      color: "text-[#367AFE]",
      borderColor: "border-[#367AFE]",
      bgPattern: "bg-hero-pattern-blue",
      rightSvgFillColor: "#00FFE0",
    },
    logoOne: CfBuyerLogoOne,
    logoTwo: CfBuyerLogoTwo,
  },
];

function HeroOne() {
  const handleButtonClick = () => {
    // ReactGA.event({
    //   category: "Button Click",
    //   action: "See Demo"
    // });
    // window.metapixelfunction("demo", "see_demo", {});
    // window.dataLayer.push({
    //   event: "see_demo"
    // });
  };

  return (
    <>
      <section className="w-full lg:min-h-[95vh] px-6 sm:px-10 bg-white pb-16 sm:pb-40 lg:pb-32 bg-cover bg-hero-pattern">
        <div className="w-full h-auto pt-20 sm:pt-32">
          <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center lg:flex-row flex-col h-full">
            {/* Left Side */}
            <Fade left duration={1000} delay={500} distance="30px">
              <div className="w-full lg:w-1/2">
                <div className="max-w-lg[x] mx-auto[x] text-center lg:text-left">
                  <h1 className="w-full text-[28px] sm:text-5xl lg:text-[56px] font-bold text-center lg:text-left text-white leading-8 sm:leading-[64px] lg:leading-[70px] sm:px-6 lg:px-0">
                    Digitizing <br className="hidden lg:block" /> agriculture
                    &mdash; <br className="hidden sm:block lg:hidden" /> From
                    supply to demand
                  </h1>
                  <p className="mt-5 sm:mt-10 w-full text-base font-small sm:text-[32px] text-center lg:text-left text-white lg:pr-5[x] sm:leading-[44px]">
                    Complete Farmer connects food growers and global buyers to{" "}
                    <Typed
                      className="font-bold text-green-500"
                      strings={[
                        "competitive markets",
                        "resources",
                        "data",
                        "capital",
                        "each other",
                      ]}
                      typeSpeed={40}
                      backSpeed={50}
                      loop
                    />
                    <br className="" />
                    on a single platform
                  </p>

                  <div className="flex flex-col items-start justify-start sm:gap-4 md:flex-row md:gap-8 mt-10 sm:mt-14 sm:justify-center lg:justify-start">
                    <div className="flex justify-center w-full md:w-auto">
                      <a
                        href="/product"
                        className={
                          "flex justify-center items-center w-full sm:w-[296px] lg:w-auto lg:h-auto gap-2 px-12 sm:px-[79px] lg:px-8 sm:py-4 py-5 rounded-full z-20 bg-[#31bc2e] font-bold text-white"
                        }
                      >
                        View products
                      </a>
                    </div>
                    <div className="flex justify-center w-full mt-4 md:w-auto md:mt-0">
                      <a
                        href="/product"
                        onClick={() => handleButtonClick()}
                        className="flex justify-center items-center w-full sm:w-[296px] lg:w-auto lg:h-auto[x] gap-2 px-12 sm:px-[79px] sm:py-4 lg:px-16 lg:py-5[x] py-5 rounded-full z-20 text-[#022d2b] bg-white font-bold"
                      >
                        See demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
            {/* Right Side */}
            <Fade right duration={1000} delay={500} distance="30px">
              <div className="hidden lg:block w-full lg:w-1/2 lg:mt-0">
                <div className="relative w-full h-full transform scale-90">
                  <img
                    src={Illustration.src}
                    alt="hereo-image"
                  />
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}

const Hero = () => {
  const initialData = initialTabs[0];
  const [tabs, setTabs] = useState(initialTabs);
  const [currentTab, setCurrentTab] = useState(initialData);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("isFirstTime") ? true : false;
    if (!isFirstTime) {
      localStorage.setItem("isFirstTime", "true");
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
            <PlainTab tabs={tabs} changeTab={changeTab} color={currentTab.data.color} borderColor={currentTab.data.borderColor} />
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

  // Right
  const RightComp1 = () => (
    <div className="hidden xl:flex lg:w-1/2  h-full lg:pt-0 pt-24 overflow-hidden">
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative h-full w-full pl-24 lg:pr-0 pr-10 ">
          <div className="w-32 h-[600.14px]">
            <div className="w-[287.32px] h-[368.38px] absolute left-20 top-0">
              <svg
                width={281}
                height={361}
                viewBox="0 0 281 361"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[4.54px] top-[4.98px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M280.315 191.68C280.315 285.073 188.813 360.877 95.5242 360.877L0.0263759 360.877L0.0263672 0.469238H280.315V191.68Z"
                  fill={currentTab.data.rightSvgFillColor}
                />
              </svg>
              <div className="absolute left-[-2.49px] top-[-2.4px]" />
              <div className="w-[281.07px] h-[361.35px]">
                <div className="absolute left-[-2.13px] top-[-2.03px]" />
                <img
                  className="w-[288.88px] h-[361.35px] absolute left-[-0.39px] top-[-0.39px]"
                  src={currentTab.logoOne.src}
                  style={{
                    clipPath:
                      "path('M280.315 191.68C280.315 285.073 188.813 360.877 95.5242 360.877L0.0263759 360.877L0.0263672 0.469238H280.315V191.68Z')",
                  }}
                />
              </div>
              <div className="w-[274px] h-[352px] absolute left-[219px] top-[249px]">
                <svg
                  width={268}
                  height={345}
                  viewBox="0 0 268 345"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[4.22px] top-[4.65px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M268 182.847C268 272.088 180.738 344.523 91.7732 344.523L0.70118 344.523L0.701172 0.136475H268V182.847Z"
                    fill={currentTab.data.rightSvgFillColor}
                  />
                </svg>
                <div className="absolute left-[-2.49px] top-[-2.4px]" />
                <div className="w-[268.04px] h-[345.29px]">
                  <div className="absolute left-[-2.13px] top-[-2.03px]" />
                  <img
                    className="w-[275.49px] h-[345.29px] absolute left-[-0.39px] top-[-0.39px]"
                    src={currentTab.logoTwo.src}
                    style={{
                      clipPath:
                        "path('M268 182.847C268 272.088 180.738 344.523 91.7732 344.523L0.70118 344.523L0.701172 0.136475H268V182.847Z')",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );

  return (
    <>
      {!isFirstTime ? (
        <HeroOne />
      ) : (
        <section
          className={`w-full px-6 sm:px-10 bg-white pb-20 sm:pb-48 xl:pb-32 bg-cover ${currentTab.data.bgPattern}`}
        >
          <div className="w-full h-auto pt-14 sm:pt-20 xl:pt-32">
            <div className="max-w-7xl mx-auto sm:px-4 xl:px-0 flex items-center xl:flex-row flex-col h-full">
              <LeftComp />

              <RightComp1 />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Hero;
