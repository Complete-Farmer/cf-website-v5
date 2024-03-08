import { classNames } from "@utils/functions";
import { Fragment } from "react";
import { Fading } from ".";

interface IProps {
  images: {
    tablet?: string;
    desktop: string;
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
      <Fading right>
        <Fragment>
          {images.tablet && (
            <div className="lg:hidden relative h-full w-full">
              <img src={images.tablet} />
            </div>
          )}
          <div className="hidden lg:block relative h-full w-full pl-24">
            <img src={images.desktop} />
          </div>
        </Fragment>
      </Fading>
    </div>
  );
};

export default HeroRight;
