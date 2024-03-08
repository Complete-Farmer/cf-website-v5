import { ArrowIcon } from "@assets/icons";
import { classNames } from "@utils/functions";
import type { IClickEvent } from "types/app";
import { Fading } from ".";

interface IProps {
  incentives: {
    name: string;
    icon: JSX.Element;
    description: string;
    linkText: string;
    link?: string;
    action?: (i: string) => void;
  }[];
  textColor?: string;
}

export default function SectionList({
  textColor = "text-grower-500",
  incentives,
}: IProps) {

  return (
    <div className="mx-auto max-w-7xl px-8 py-4 md:py-5 sm:px-2 xl:py-16 xl:px-4">
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8 xl:grid-cols-3 mb-20">
        {incentives.map((i, idx) => (
          <Fading
            bottom
            key={i.name}
            delay={300 + idx * 150}
            duration={1000 + idx * 150}
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-start">
                <div className="flex-shrink-0">{i.icon}</div>
                <div className="w-full mt-4 xl:mt-6 xl:w-auto">
                  <h3 className="text-2xl sm:text-[28px] font-bold text-gray-900">
                    {i.name}
                  </h3>
                  <p className="mt-4 text-xs sm:text-base xl:w-[373px] xl:h-20 xl:text-base xl:leading-6 text-custom_black-900">
                    {i.description}
                  </p>
                </div>
              </div>
              <div
                className={classNames(
                  textColor,
                  "mt-2 flex justify-start flex-grow-0 flex-shrink-0 relative opacity-90 space-x-2 xl:space-x-3"
                )}
              >
                <a
                  href={i.link || ""}
                  onClick={(e: IClickEvent) => {
                    if (i.action) {
                      e.preventDefault();
                      i.action(i.name);
                    }
                  }}
                  className="text-base sm:text-[20px] font-bold text-center xl:block hover:cursor-pointer"
                >
                  {i.linkText}
                </a>
                <ArrowIcon />
              </div>
            </div>
          </Fading>
        ))}
      </div>
    </div>
  );
}
