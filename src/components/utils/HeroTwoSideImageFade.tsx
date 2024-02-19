import Fade from "react-reveal/Fade";

import { Button } from "@components/utils";
import { TwoLeavesIcon } from "@assets/icons";
import { $applicationFormModal, $joinSalesAffiliateModal } from "@utils/stores";
import { classNames } from "@utils/functions";
import useWindow from "@hooks/useWindow";

interface IProps {
  text?: string;
  heading: string;
  bgImage?: string;
  bgColor?: string;
  leftImage: string;
  rightImage: string;
  iconColor?: string;
  textColor?: string;
  titleWidth?: string;
  hasButton?: boolean;
  buttonTitle?: string;
  buttonBgColor?: string;
}

const Hero = ({
  text,
  heading,
  leftImage,
  rightImage,
  titleWidth,
  buttonTitle,
  buttonBgColor,
  bgImage = "bg-about-us-hero",
  textColor = "text-grower-900",
  bgColor = "bg-custom_orange-200",
  iconColor = "text-custom_orange-500",
}: IProps) => {
  const isCareer = useWindow<boolean>(
    () => window?.location?.pathname?.includes("career"),
    false
  );

  return (
    <section
      className={classNames(
        bgImage,
        bgColor,
        "py-20 sm:py-10 xl:py-20 bg-cover"
      )}
    >
      <div className="flex justify-between items-center h-full">
        <Fade left duration={1000} delay={500} distance="30px">
          <div className="hidden xl:block ">
            <img className="" src={leftImage} />
          </div>
        </Fade>

        <div
          className={classNames(
            textColor,
            "flex flex-col justify-center text-center sm:text-left xl:text-center items-center sm:items-start xl:items-center px-8 w-full sm:w-3/4 xl:w-1/2 sm:pl-10 xl:px-0 md:mb-20 space-y-6 xl:space-y-7"
          )}
        >
          {!isCareer ? (
            <TwoLeavesIcon
              className={classNames(
                iconColor,
                "mx-auto sm:mx-0 xl:mx-auto h-10 w-10"
              )}
            />
          ) : (
            <h3 className="text-custom_orange-500 text-2xl font-bold">
              JOIN THE COMPLETE FARMER TEAM
            </h3>
          )}
          <h1
            className={classNames(
              titleWidth,
              "text-[28px] leading-8 md:text-[32px] md:leading-10 xl:leading-[60px] font-bold xl:text-5xl"
            )}
          >
            {heading}
          </h1>
          {text && (
            <p className="text-xs leading-4 md:text-sm md:leading-5 xl:text-xl xl:leading-8">
              {text}
            </p>
          )}
          {buttonTitle && (
            <div className="w-full flex items-center justify-center md:justify-start xl:justify-center">
              <Button
                id="hero-two-side-img-fade-button"
                title={buttonTitle}
                onClick={() => {
                  if (buttonTitle.includes("affiliate")) {
                    $joinSalesAffiliateModal.set(true);
                  } 
                  if (buttonTitle.includes("academy") || buttonTitle.includes("Agent")) {
                    $applicationFormModal.set(true);
                  }
                  if (buttonTitle.includes("vacancies")) {
                    window.location.hash= "vacancies";
                  } 
                }}
                className={classNames(
                  buttonBgColor,
                  "w-full md:w-4/5 xl:w-fit xl:px-10 xl:py-5 !text-xl !sm:text-base !rounded-full"
                )}
              />
            </div>
          )}
        </div>

        <Fade right duration={1000} delay={500} distance="30px">
          <div className="hidden sm:block py-10">
            <img className="h-auto w-auto" src={rightImage} />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
