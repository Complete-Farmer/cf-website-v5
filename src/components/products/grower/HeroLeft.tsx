import PlainTab from "@components/utils/PlainTab";
import type { ITab } from "types/app";
import { Button, Fading } from "@components/utils";
import { classNames, getAppLink } from "@utils/functions";

interface IProps {
  tabs: ITab[];
  currentTab: ITab;
}

const HeroLeft = ({ tabs, currentTab }: IProps) => {
  const handleButtonClick = () => {
    window.fbq("track", "click", {
      content_category: "Auth Button Clicked",
      content_name: "Redirect to Grower",
    });
    window.gtag("event", "generate_lead", {
      event_category: "Auth Button Clicked",
      event_label: "Redirect to Grower",
    });
  };

  const firstButtonText = currentTab.data.firstButtonText as string;

  return (
    <div className="w-full sm:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start justify-center space-y-10">
      <Fading left>
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
      </Fading>
    </div>
  );
};

export default HeroLeft;
