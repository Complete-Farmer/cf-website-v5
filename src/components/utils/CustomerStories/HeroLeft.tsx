import { Fading } from "..";

interface IProps {
  title: string;
  description: string;
}

const HeroLeft = ({ title, description }: IProps) => {
  return (
    <div className="w-full 2xl:w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start items-center justify-center space-y-10">
      <Fading left>
        <div className="w-full flex flex-col justify-start items-start gap-11">
          <div className="flex flex-col justify-start items-start gap-4 2xl:gap-8">
            <h2 className="text-2xl w-full xl:w-11/12 font-bold text-left md:text-[32px] md:leading-10 lg:text-[40px] lg:leading-[50px]">
              {title}
            </h2>
            <p className="text-sm w-full 2xl:w-[546px] font-normal text-left md:text-base xl:text-left">
              {description}
            </p>
          </div>
        </div>
      </Fading>
    </div>
  );
};

export default HeroLeft;
