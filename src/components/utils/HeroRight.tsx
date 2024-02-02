import { classNames } from "@utils/functions";
import Fade from "react-reveal/Fade";

interface IProps {
  images: {
    tablet?: string;
    desktop?: string;
  };
  className?: string;
}

const HeroRight = ({ images, className }: IProps) => {
  return (
    <div
      className={classNames(
        className,
        "xl:flex lg:w-1/2 h-full lg:pt-0 pt-24 overflow-hidden"
      )}
    >
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="lg:hidden relative h-full w-full">
          <img src={images.tablet} />
        </div>
        <div className="hidden lg:block relative h-full w-full pl-24">
          <img src={images.desktop} />
        </div>
      </Fade>
    </div>
  );
};

export default HeroRight;
