import Fade from "react-reveal/Fade";
import PlainTab from "@components/utils/PlainTab";
import type { ITab } from "types/app";

interface IProps {
  tabs: ITab[];
  currentTab: ITab;
}

const HeroLeft = ({ tabs, currentTab }: IProps) => {
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

  return (
    <div className="w-full xl:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start sm:items-center justify-center space-y-10">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex justify-start items-start w-full">
            <PlainTab
              tabs={tabs}
              color="text-grower-500"
              borderColor="border-grower-500"
            />
          </div>

          <div className="flex flex-col justify-start items-start gap-8">
            <p className="w-full text-[28px] sm:text-[40px] xl:text-5xl font-bold text-center leading-9 xl:text-left">
              {currentTab.data.title as string}&nbsp;
            </p>
            <p className="w-full text-xl text-center xl:text-left">
              {currentTab.data.description as string} &nbsp;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full justify-between xl:justify-start items-start gap-6">
            <button
              onClick={handleButtonClick}
              className="flex justify-center items-center w-full xl:w-auto h-16 gap-2 px-8 py-4 rounded-full bg-grower-500"
            >
              <span className="text-xl font-bold text-left">
                {currentTab.data.firstButtonText as string}
              </span>
            </button>
            <a
              href={"/products?tab=" + currentTab.href}
              onClick={() => handleButtonClick()}
              className="flex justify-center items-center w-full xl:w-[230px] h-16  gap-2 px-8 py-4 rounded-full border border-grower-500"
            >
              <span className="text-xl font-bold text-left text-grower-500">
                {currentTab.data.secondButtonText as string}
              </span>
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroLeft;