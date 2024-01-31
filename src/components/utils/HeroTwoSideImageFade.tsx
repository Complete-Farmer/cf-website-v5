import Fade from "react-reveal/Fade";

import { Button } from "@components/utils";
import { TwoLeavesIcon } from "@assets/icons";
import { $applicationFormModal } from "@utils/stores";

interface IProps {
  text: string;
  heading: string;
  leftImage: string;
  rightImage: string;
  hasButton?: boolean;
  buttonTitle?: string;
}

const Hero = ({ text, heading, buttonTitle, leftImage, rightImage }: IProps) => {
  return (
    <section className="pb-10 sm:pb-0 bg-cover bg-about-us-hero bg-custom_orange-200 h-[50vh] sm:h-[60vh] xl:h-[94vh]">
      <div className="flex justify-between items-center h-full">
        <Fade left duration={1000} delay={500} distance="30px">
          <div className="hidden xl:block ">
            <img className="" src={leftImage} />
          </div>
        </Fade>

        <div className="flex flex-col justify-center text-center sm:text-left xl:text-center items-center sm:items-start xl:items-center px-8 w-full sm:w-3/4 xl:w-1/2 sm:pl-10 xl:px-0 md:mb-20 space-y-6 xl:space-y-7">
          <TwoLeavesIcon className="mx-auto sm:mx-0 xl:mx-auto h-10 w-10 text-custom_orange-500" />
          <h1 className="text-[28px] leading-8 md:text-[32px] md:leading-10 xl:leading-[60px] font-bold text-grower-900 xl:text-5xl">
            {heading}
          </h1>
          <p className="text-xs leading-4 md:text-sm md:leading-5 xl:text-xl xl:leading-8">
            {text}
          </p>
          {buttonTitle && (
            <div className="w-full flex items-center md:justify-start xl:justify-center">
              <Button
                title={buttonTitle}
                onClick={() => $applicationFormModal.set(true)}
                className="w-full md:w-4/5 xl:w-80 h-14 xl:h-14 !text-xl !sm:text-base !rounded-full"
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