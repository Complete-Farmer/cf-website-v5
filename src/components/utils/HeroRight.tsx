import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";

interface IProps {
  id: string;
  fill: string;
  imageOne: ImageMetadata;
  imageTwo: ImageMetadata;
}

const HeroRight = (props: IProps) => {
  const [when, setWhen] = useState(true);

  useEffect(() => {
    setWhen(false);
    setTimeout(() => setWhen(true), 0);
  }, [props]);
  
  return (
    <div key={props.id} className="hidden xl:flex lg:w-1/2 h-full lg:pt-0 pt-24 overflow-hidden">
      <Fade right duration={1000} delay={500} distance="30px" when={when}>
        <div className="relative h-full w-full pl-24 lg:pr-0 pr-10 ">
          <div className="w-32 h-[600.14px]">
            <div className="w-[287.32px] h-[368.38px] absolute left-20 top-0">
              <svg
                width={281}
                height={361}
                viewBox="0 0 281 361"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-[4.54px] top-[4.98px]"
                preserveAspectRatio="none"
              >
                <path
                  d="M280.315 191.68C280.315 285.073 188.813 360.877 95.5242 360.877L0.0263759 360.877L0.0263672 0.469238H280.315V191.68Z"
                  fill={props.fill}
                />
              </svg>
              <div className="absolute left-[-2.49px] top-[-2.4px]" />
              <div className="w-[281.07px] h-[361.35px]">
                <div className="absolute left-[-2.13px] top-[-2.03px]" />
                <img
                  className="w-[288.88px] h-[361.35px] absolute left-[-0.39px] top-[-0.39px]"
                  src={props.imageOne.src}
                  style={{
                    clipPath:
                      "path('M280.315 191.68C280.315 285.073 188.813 360.877 95.5242 360.877L0.0263759 360.877L0.0263672 0.469238H280.315V191.68Z')",
                  }}
                />
              </div>
              <div className="w-[274px] h-[352px] absolute left-[219px] top-[249px]">
                <svg
                  width={268}
                  height={345}
                  viewBox="0 0 268 345"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[4.22px] top-[4.65px]"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M268 182.847C268 272.088 180.738 344.523 91.7732 344.523L0.70118 344.523L0.701172 0.136475H268V182.847Z"
                    fill={props.fill}
                  />
                </svg>
                <div className="absolute left-[-2.49px] top-[-2.4px]" />
                <div className="w-[268.04px] h-[345.29px]">
                  <div className="absolute left-[-2.13px] top-[-2.03px]" />
                  <img
                    className="w-[275.49px] h-[345.29px] absolute left-[-0.39px] top-[-0.39px]"
                    src={props.imageTwo.src}
                    style={{
                      clipPath:
                        "path('M268 182.847C268 272.088 180.738 344.523 91.7732 344.523L0.70118 344.523L0.701172 0.136475H268V182.847Z')",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default HeroRight;
