import Fade from "react-reveal/Fade";

interface IProps {
  title: string;
  description: string;
}

const HeroLeft = ({ title, description }: IProps) => {
  return (
    <div className="max-[767px]:w-[100%] w-1/2 h-full flex flex-col xl:pr-0 lg:pr-5 lg:items-start items-center justify-center space-y-10">
      <Fade left duration={1000} delay={500} distance="30px">
        <div className="flex flex-col justify-start items-start gap-11">
          <div className="flex flex-col justify-start items-start gap-8">
            <p className="text-base w-[327px] font-bold text-left md:text-[32px] md:leading-10 md:w-80 lg:text-[40px] lg:leading-[50px] lg:w-11/12">
              {title}
            </p>
            <p className="text-sm h-16 w-80 font-normal text-left md:text-sm md:h-20 md:w-[348px] lg:text-base xl:text-left lg:w-[546px] lg:h-20">
              {description}
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroLeft;
