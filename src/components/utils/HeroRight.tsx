import { classNames } from "@utils/functions";
import Fade from "react-reveal/Fade";

interface IProps {
  imageSrc: string;
  className?: string;
}

const HeroRight = (props: IProps) => {
  return (
    <div className={classNames(props.className, "xl:flex lg:w-1/2 h-full lg:pt-0 pt-24 overflow-hidden")}>
      <Fade right duration={1000} delay={500} distance="30px">
        <div className="relative h-full w-full pl-24 lg:pr-0 pr-10 ">
          <img src={props.imageSrc} />
        </div>
      </Fade>
    </div>
  );
};

export default HeroRight;
