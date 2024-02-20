import Fade from "react-reveal/Fade";
import PlainTab from "@components/utils/PlainTab";
import type { ITab } from "types/app";
import { Button } from "@components/utils";
import { classNames, getAppLink } from "@utils/functions";

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

  const firstButtonText = currentTab.data.firstButtonText as string;

  return (
    <div className="w-full sm:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start justify-center space-y-10">
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
            <h1 className="w-full text-[28px] sm:text-[32px] xl:text-5xl font-bold text-center sm:text-left leading-9">
              {currentTab.data.title as string}&nbsp;
            </h1>
            <p className="w-full sm:text-base lg:text-xl text-center sm:text-left">
              {currentTab.data.description as string} &nbsp;
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full xl:justify-start items-start gap-6">
            <a
              target="_blank"
              rel="noreferrer"
              className="contents"
              href={getAppLink("Signup Grower")}
            >
              <Button
                title={firstButtonText}
                onClick={handleButtonClick}
                className={classNames(
                  firstButtonText.includes("Started")
                    ? "xl:!w-[145px]"
                    : " xl:!w-[130px]",
                  "py-4 sm:!w-[170px] text-xl !rounded-full"
                )}
              />
            </a>

            <a href="/products?tab=grower" className="contents">
              <Button
                onClick={handleButtonClick}
                title={currentTab.data.secondButtonText as string}
                className="py-4 sm:!w-[170px] xl:!w-[180px] text-xl !rounded-full !bg-transparent !border-2 !border-grower-500"
              />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroLeft;
