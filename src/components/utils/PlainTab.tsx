import type { IClickEvent, IPlainProps } from "types/app";
import { classNames } from "@utils/functions";

const PlainTab = ({ tabs, changeTab, color, borderColor }: IPlainProps) => {
  return (
    <div className="w-full">
      <div className="block w-full">
        <div className="w-full">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={(e: IClickEvent) => changeTab?.(e, tab)}
                className={classNames(
                  tab.current
                    ? `border-b-2 border-l-0 ${borderColor}`
                    : "border-b border-l-0 border-[#0a665f]",
                  " w-1/2 xl:w-auto gap-2.5 p-4 border-t-0 border-r-0  whitespace-nowrap py-4 px-1 text-sm font-medium flex flex-col justify-center items-start flex-grow-0 flex-shrink-0"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <div className="flex justify-center mx-auto xl:mx-0 items-center flex-grow-0 flex-shrink-0 relative gap-2">
                  <p
                    className={classNames(
                      tab.current ? `${color}` : "text-white",
                      "flex-grow-0 flex-shrink-0 h-6 lg:text-base text-left mx-3"
                    )}
                  >
                    {tab.name}
                  </p>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PlainTab;
