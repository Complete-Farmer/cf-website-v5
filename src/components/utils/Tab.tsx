import { Tab } from "@headlessui/react";
import { classNames } from "@utils/functions";

interface IProps {
  categories: {
    name: string;
    current: boolean;
  }[];
  className?: string;
  changeCategory?: (i: number) => void;
  activeBgColor?: string;
  inActiveBgColor?: string;
  normalBgColor?: string;
  inActiveTextColor?: string;
}

export default function TabComp(props: IProps) {
  const {
    className = "",
    categories,
    changeCategory,
    activeBgColor = "",
    inActiveBgColor = "",
    normalBgColor="",
    inActiveTextColor = "",
  } = props;
  const initialIndex = categories.findIndex((category) => category.current);

  return (
    <div
      className={classNames(
        className,
        "w-full lg:max-w-xl sm:mb-12 lg:mb-6 lg:py-6 sm:px-0"
      )}
    >
      <Tab.Group
        key={initialIndex}
        defaultIndex={initialIndex}
        onChange={(index) => {
          changeCategory?.(index);
        }}
      >
        <Tab.List
          id="tab_list"
          className={classNames(
            "flex space-x-1 rounded-full p-1",
            normalBgColor
          )}
        >
          {categories.map((category) => (
            <Tab
              id={`tab-${category.name.toLowerCase()}`}
              key={category.name}
              className={classNames(
                "w-full rounded-full py-4 px-6 text-base leading-5 font-bold whitespace-nowrap",
                " focus:outline-none ",
                category.current
                  ? `${activeBgColor} shadow text-white`
                  : ` ${inActiveBgColor} ${inActiveTextColor}`
              )}
            >
              {category.name}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  );
}
